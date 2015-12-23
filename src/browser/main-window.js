import BrowserWindow from 'browser-window'

export default class MainWindow {
  constructor() {
    this.window = new BrowserWindow({ width: 800, height: 600 });
    this.window.loadURL(`file://${__dirname}/../renderer/index.html`);
    this.window.on('closed', () => {
      this.window = null;
    });
  }
}
