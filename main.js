const { app, BrowserWindow} = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1280,
      height: 720,
      webPreferences: {
        preload: path.join(__dirname, 'app/js/preload.js')
      }
    })
  
    win.loadFile('app/index.html')
  }

  app.whenReady().then(()=>{
    createWindow();
    console.log(process)
  })