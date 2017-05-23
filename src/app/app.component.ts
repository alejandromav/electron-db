import { Component } from '@angular/core';
import { ElectronService } from './services/electron.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isElectron: boolean;

    constructor(
        public electronService: ElectronService
    ) {
        this.isElectron = electronService.isElectron();
        if (this.isElectron) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        } else {
            console.log('Mode web');
        }
    }

    close() {
        this.electronService.closeApp();
    }

    minimize() {
        this.electronService.minimizeApp();
    }
    
    maximize() {
        this.electronService.maximizeApp();
    }
}
