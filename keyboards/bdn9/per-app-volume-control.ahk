; Per-App Volume Control for BDN9 Macropad
; Encoder 1 (F13/F14/F15) -> Discord
; Encoder 2 (F16/F17/F18) -> Spotify
; Encoder 3 (F19/F20/F21) -> Focused/Active App
; Requires: AutoHotkey v2.0+

#Requires AutoHotkey v2.0+
#SingleInstance Force

; Configuration
VOLUME_STEP := 5  ; Volume change in percentage (adjust to your preference)

; Process names (change these if needed)
DISCORD_PROCESS := "Discord.exe"
SPOTIFY_PROCESS := "Spotify.exe"

; ===== ENCODER 1 - DISCORD =====
F13::AdjustAppVolume(DISCORD_PROCESS, VOLUME_STEP)          ; Clockwise - Volume Up
F14::AdjustAppVolume(DISCORD_PROCESS, -VOLUME_STEP)         ; Counter-clockwise - Volume Down
F15::ToggleAppMute(DISCORD_PROCESS)                         ; Press - Mute Toggle

; ===== ENCODER 2 - SPOTIFY =====
F16::AdjustAppVolume(SPOTIFY_PROCESS, VOLUME_STEP)          ; Clockwise - Volume Up
F17::AdjustAppVolume(SPOTIFY_PROCESS, -VOLUME_STEP)         ; Counter-clockwise - Volume Down
F18::ToggleAppMute(SPOTIFY_PROCESS)                         ; Press - Mute Toggle

; ===== ENCODER 3 - FOCUSED APP =====
F19::AdjustFocusedAppVolume(VOLUME_STEP)                    ; Clockwise - Volume Up
F20::AdjustFocusedAppVolume(-VOLUME_STEP)                   ; Counter-clockwise - Volume Down
F21::ToggleFocusedAppMute()                                 ; Press - Mute Toggle

; ===== FUNCTIONS =====

AdjustAppVolume(processName, volumeChange) {
    try {
        sessions := GetAudioSessions()
        for session in sessions {
            if (session.ProcessName = processName) {
                volume := session.Volume
                newVolume := Max(0, Min(100, volume + volumeChange))
                session.SetVolume(newVolume)

                ; Show notification
                ToolTip(processName . ": " . Round(newVolume) . "%")
                SetTimer(() => ToolTip(), -1000)  ; Hide after 1 second
                return
            }
        }
        ; App not found
        ToolTip(processName . " not running")
        SetTimer(() => ToolTip(), -1000)
    } catch as e {
        ToolTip("Error: " . e.Message)
        SetTimer(() => ToolTip(), -1000)
    }
}

ToggleAppMute(processName) {
    try {
        sessions := GetAudioSessions()
        for session in sessions {
            if (session.ProcessName = processName) {
                currentMute := session.IsMuted
                session.SetMute(!currentMute)

                ; Show notification
                muteStatus := !currentMute ? "MUTED" : "UNMUTED"
                ToolTip(processName . ": " . muteStatus)
                SetTimer(() => ToolTip(), -1500)
                return
            }
        }
        ; App not found
        ToolTip(processName . " not running")
        SetTimer(() => ToolTip(), -1000)
    } catch as e {
        ToolTip("Error: " . e.Message)
        SetTimer(() => ToolTip(), -1000)
    }
}

AdjustFocusedAppVolume(volumeChange) {
    processName := GetActiveWindowProcess()
    if (processName = "") {
        ToolTip("No active window")
        SetTimer(() => ToolTip(), -1000)
        return
    }
    AdjustAppVolume(processName, volumeChange)
}

ToggleFocusedAppMute() {
    processName := GetActiveWindowProcess()
    if (processName = "") {
        ToolTip("No active window")
        SetTimer(() => ToolTip(), -1000)
        return
    }
    ToggleAppMute(processName)
}

GetActiveWindowProcess() {
    try {
        ; Get the active window handle
        activeHwnd := WinGetID("A")

        ; Get the process ID of the active window
        activeProcessId := WinGetPID("ahk_id " . activeHwnd)

        ; Get the process name
        processName := GetProcessName(activeProcessId)

        return processName
    } catch {
        return ""
    }
}

GetAudioSessions() {
    sessions := []

    ; Get device enumerator
    DeviceEnumerator := ComObject("{BCDE0395-E52F-467C-8E3D-C4579291692E}", "{A95664D2-9614-4F35-A746-DE8DB63617E6}")

    ; Get default audio endpoint
    ComCall(4, DeviceEnumerator, "UInt", 0, "UInt", 1, "Ptr*", &pDevice := 0)  ; eRender, eConsole
    Device := ComValue(13, pDevice)

    ; Activate session manager
    IID_IAudioSessionManager2 := Buffer(16)
    DllCall("ole32\CLSIDFromString", "Str", "{77AA99A0-1BD6-484F-8BC7-2C654C9A9B6F}", "Ptr", IID_IAudioSessionManager2)
    ComCall(3, Device, "Ptr", IID_IAudioSessionManager2, "UInt", 23, "Ptr", 0, "Ptr*", &pSessionManager := 0)
    SessionManager := ComValue(13, pSessionManager)

    ; Get session enumerator
    ComCall(5, SessionManager, "Ptr*", &pSessionEnumerator := 0)
    SessionEnumerator := ComValue(13, pSessionEnumerator)

    ; Get session count
    ComCall(3, SessionEnumerator, "Int*", &sessionCount := 0)

    ; Iterate through sessions
    Loop sessionCount {
        ComCall(4, SessionEnumerator, "Int", A_Index - 1, "Ptr*", &pSessionControl := 0)
        SessionControl := ComValue(13, pSessionControl)

        ; Get session control 2
        IID_IAudioSessionControl2 := Buffer(16)
        DllCall("ole32\CLSIDFromString", "Str", "{BFB7FF88-7239-4FC9-8FA2-07C950BE9C6D}", "Ptr", IID_IAudioSessionControl2)
        ComCall(0, SessionControl, "Ptr", IID_IAudioSessionControl2, "Ptr*", &pSessionControl2 := 0)
        SessionControl2 := ComValue(13, pSessionControl2)

        ; Get process ID
        ComCall(14, SessionControl2, "UInt*", &processId := 0)

        if (processId != 0) {
            ; Get process name
            processName := GetProcessName(processId)

            ; Get simple audio volume interface
            IID_ISimpleAudioVolume := Buffer(16)
            DllCall("ole32\CLSIDFromString", "Str", "{87CE5498-68D6-44E5-9215-6DA47EF883D8}", "Ptr", IID_ISimpleAudioVolume)
            ComCall(0, SessionControl, "Ptr", IID_ISimpleAudioVolume, "Ptr*", &pSimpleVolume := 0)
            SimpleVolume := ComValue(13, pSimpleVolume)

            ; Get current volume
            ComCall(4, SimpleVolume, "Float*", &level := 0.0)

            ; Get mute state
            ComCall(6, SimpleVolume, "Int*", &muted := 0)

            ; Create session object
            sessionObj := {
                ProcessName: processName,
                ProcessId: processId,
                Volume: Round(level * 100),
                IsMuted: muted,
                SimpleVolume: SimpleVolume,
                SetVolume: (self, newVolume) => ComCall(3, self.SimpleVolume, "Float", newVolume / 100.0, "Ptr", 0),
                SetMute: (self, muteState) => ComCall(5, self.SimpleVolume, "Int", muteState, "Ptr", 0)
            }

            sessions.Push(sessionObj)
        }
    }

    return sessions
}

GetProcessName(processId) {
    try {
        hProcess := DllCall("OpenProcess", "UInt", 0x0410, "Int", 0, "UInt", processId, "Ptr")
        if (hProcess) {
            size := 260
            name := Buffer(size * 2)
            if (DllCall("psapi\GetProcessImageFileName", "Ptr", hProcess, "Ptr", name, "UInt", size)) {
                DllCall("CloseHandle", "Ptr", hProcess)
                fullPath := StrGet(name)
                SplitPath(fullPath, &fileName)
                return fileName
            }
            DllCall("CloseHandle", "Ptr", hProcess)
        }
    }
    return ""
}
