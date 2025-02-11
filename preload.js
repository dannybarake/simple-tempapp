// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  for (const versionType of['chrome', 'electron', 'node']) {
    document.getElementById(`${versionType}-version`).innerText = process.versions[versionType]
  }

  document.getElementById('serialport-version').innerText = require('serialport/package').version

})

// Add some browser functions
const {remote} = require('electron');

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);
document.getElementById('maximize').addEventListener('click', maximizeWindow);

/*
  getFocusedWindow() may return null.
  If a user uses global keyboard shortcut to trigger 
  minimizeWindow, there may not be any window that 
  is focused right now
*/ 
const getWindow = () => remote.BrowserWindow.getFocusedWindow();

function closeWindow () {
    getWindow().close();
}

function minimizeWindow () {  
    getWindow().minimize();
}

function maximizeWindow () {
    const window = getWindow();
    window.isMaximized() ? window.unmaximize() : window.maximize();
}