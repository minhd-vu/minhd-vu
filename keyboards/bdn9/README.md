# BDN9 Macropad Per-App Volume Control

This setup allows your BDN9 macropad's encoders to control individual application volumes on Windows:

- **Encoder 1**: Discord volume control
- **Encoder 2**: Spotify volume control
- **Encoder 3**: Focused/Active app volume control (whichever app window you're currently using)

## How It Works

Your macropad sends F13-F21 key presses via VIA, and the AutoHotkey script running on Windows intercepts these keys to adjust Discord, Spotify, and focused app volumes.

### Key Mapping

| Encoder | Action | Key | Controls |
|---------|--------|-----|----------|
| Encoder 1 | Rotate Clockwise | F13 | Discord Volume Up |
| Encoder 1 | Rotate Counter-Clockwise | F14 | Discord Volume Down |
| Encoder 1 | Press | F15 | Discord Mute Toggle |
| Encoder 2 | Rotate Clockwise | F16 | Spotify Volume Up |
| Encoder 2 | Rotate Counter-Clockwise | F17 | Spotify Volume Down |
| Encoder 2 | Press | F18 | Spotify Mute Toggle |
| Encoder 3 | Rotate Clockwise | F19 | Focused App Volume Up |
| Encoder 3 | Rotate Counter-Clockwise | F20 | Focused App Volume Down |
| Encoder 3 | Press | F21 | Focused App Mute Toggle |

---

## Setup Instructions

### Step 1: Configure VIA

1. Open **VIA** (https://usevia.app/ or the desktop app)
2. Connect your BDN9 macropad
3. Configure each encoder as follows:

**Encoder 1 (Discord):**
- Clockwise: `F13`
- Counter-Clockwise: `F14`
- Press: `F15`

**Encoder 2 (Spotify):**
- Clockwise: `F16`
- Counter-Clockwise: `F17`
- Press: `F18`

**Encoder 3 (Focused/Active App):**
- Clockwise: `F19`
- Counter-Clockwise: `F20`
- Press: `F21`

4. Save your configuration in VIA

### Step 2: Install AutoHotkey

1. Download **AutoHotkey v2.0** from: https://www.autohotkey.com/
2. During installation, choose **AutoHotkey v2.0** (NOT v1.1)
3. Complete the installation

### Step 3: Run the Script

1. Double-click `per-app-volume-control.ahk`
2. You should see a green "H" icon in your system tray (indicates the script is running)
3. Test the encoders:
   - **Encoder 1/2**: Rotate to see Discord/Spotify volume tooltips
   - **Encoder 3**: Click on any app window (e.g., Chrome, game, etc.), then rotate to control that app's volume

**Notes:**
- Discord and Spotify must be **running and playing audio** for the script to detect them
- For Encoder 3, the app you want to control must be the **active/focused window** (just click on it first)

---

## Run Script on Windows Startup

### Option 1: Startup Folder (Recommended)

1. Press `Win + R` to open Run dialog
2. Type: `shell:startup` and press Enter
3. This opens your Startup folder
4. Right-click on `per-app-volume-control.ahk` → **Create Shortcut**
5. Move the shortcut to the Startup folder
6. The script will now run automatically when Windows starts

### Option 2: Task Scheduler (Advanced)

1. Open **Task Scheduler** (search in Start Menu)
2. Click **Create Basic Task**
3. Name: `BDN9 Volume Control`
4. Trigger: **When I log on**
5. Action: **Start a program**
6. Program/script: `C:\Program Files\AutoHotkey\v2\AutoHotkey64.exe`
7. Add arguments: `"C:\path\to\per-app-volume-control.ahk"` (use full path)
8. Finish and test by restarting your computer

---

## Customization

### Change Volume Step Size

Edit the script and change this line (default is 5%):

```ahk
VOLUME_STEP := 5  ; Change this number (1-100)
```

### Control Different Apps (Encoder 1 & 2)

Edit these lines in the script to change which apps Encoder 1 and 2 control:

```ahk
DISCORD_PROCESS := "Discord.exe"  ; Change to any app, e.g., "chrome.exe"
SPOTIFY_PROCESS := "Spotify.exe"  ; Change to any app, e.g., "firefox.exe"
```

**Finding Process Names:**
1. Open Task Manager (Ctrl+Shift+Esc)
2. Go to **Details** tab
3. Find your app and note the `.exe` name
4. Use the exact name (case-insensitive)

### How Encoder 3 (Focused App) Works

Encoder 3 automatically detects whichever application window is currently active/focused:

1. Click on the app you want to control (e.g., Chrome, a game, video player)
2. Rotate Encoder 3 to adjust that app's volume
3. Switch to a different app and Encoder 3 will control the new app

**This is super flexible!** You don't need to configure specific apps - it works with ANY application that has audio.

---

## Troubleshooting

### Script doesn't respond to encoder turns

**Check:**
1. Is the script running? (Look for green "H" icon in system tray)
2. Are you binding the correct F-keys in VIA?
3. Try restarting the script (right-click tray icon → Exit, then run again)

### "App not running" tooltip appears

**Fix:**
1. Make sure Discord/Spotify is actually open
2. **Important:** The app must be playing audio at least once for Windows to create an audio session
3. Play some audio in the app, then try the encoder again

### Wrong volume changes

**Fix:**
1. Open Task Manager → Details tab
2. Verify the exact process name (e.g., `Discord.exe` vs `DiscordPTB.exe`)
3. Update the process name in the script

### Encoder 3 not controlling the right app

**Fix:**
1. Make sure the app window is actually **focused** (click on it first)
2. The app must have played audio at least once to appear in Windows volume mixer
3. Check the tooltip - it shows which app is being controlled

### Script won't start automatically

**Fix:**
1. Check if the shortcut path is correct
2. Make sure AutoHotkey v2.0 is installed (not v1.1)
3. Try running the script manually to confirm it works

### Need to reload the script

**Quick reload:**
- Right-click the green "H" icon in system tray
- Click **Reload Script**

---

## How to Stop the Script

**Temporarily:**
- Right-click the green "H" icon in system tray → **Exit**

**Permanently (disable startup):**
- Delete the shortcut from `shell:startup` folder

---

## Technical Details

- **Language**: AutoHotkey v2.0
- **Windows API**: Uses COM to access Windows Core Audio API
- **No external dependencies** required (everything is self-contained)
- **Supported Windows**: Windows Vista and later (tested on Windows 10/11)

---

## Additional Notes

- Volume changes show a tooltip with the app name and current percentage
- Mute toggles show "MUTED" or "UNMUTED" status
- The script only affects the specific applications, not master/device volume
- Multiple instances of the same app (e.g., two Chrome windows) will be controlled together
- **Encoder 3** dynamically follows your active window - great for games, video players, or any app!

---

## License

Free to use and modify for personal use.
