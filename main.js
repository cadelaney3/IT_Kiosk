const {app, BrowserWindow} = require('electron')

let win = null;

function createWindow() {
    win = new BrowserWindow({width: 1000, height: 600});

    win.loadURL('http://localhost:3000');

    // remove when distributing
    win.webContents.openDevTools();

    // remove window when app closes
    win.on('closed', function() {
        win = null;
    });
}

app.on('ready', function () {
    createWindow();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});