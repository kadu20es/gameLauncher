const { app, BrowserWindow, screen, ipcMain } = require('electron');
const ipc = ipcMain;

function createWindow () {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    console.log(width);
    const window = new BrowserWindow({

        title: "Seletor de diversão",
        center: true,
        frame: true,
        //width: 1500,
        width: width / 1.5,
        //height: 800,
        height: height / 1.5,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        }
    });

    window.setMenu(null);
    window.center();

    window.loadFile(`index.html`);

    //
    ipc.on('closeApp', () => {
        console.log('Clicou no botão fechar')
        window.close()
    });
}


app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());



