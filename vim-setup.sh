sudo apt update
sudo apt install -y vim build-essential cmake vim python3-dev
curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
cp ./.vimrc ~/
vim +'PlugInstall --sync' +qa
cd ~/.vim/plugged/youcompleteme
python3 install.py --clangd-completer
