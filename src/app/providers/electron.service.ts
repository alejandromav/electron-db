import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';

@Injectable()
export class ElectronService {

    ipcRenderer: typeof ipcRenderer;
    childProcess: typeof childProcess;
    remote: any;

    constructor() {
        //Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
            this.remote = window.require('electron').remote;
        }
    }

    isElectron = () => {
        return window && window.process && window.process.type;
    }

    closeApp() {
        const window = this.remote.getCurrentWindow();
        window.close();
    }

    minimizeApp() {
        const window = this.remote.getCurrentWindow();
        window.minimize();
    }

    maximizeApp() {
        const window = this.remote.getCurrentWindow();
        if (!window.isMaximized()) {
            window.maximize();          
        } else {
            window.unmaximize();
        }
    }
}
