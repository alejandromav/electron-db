import { Injectable } from '@angular/core';

import { Datasource } from './../classes/datasource';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';

@Injectable()
export class DatasourcesService {
    ipcRenderer: typeof ipcRenderer;
    childProcess: typeof childProcess;

    constructor() {
        //Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }

    isElectron = () => {
        return window && window.process && window.process.type;
    }

    getDatasources(): Promise<Datasource[]> {
        return new Promise((resolve,reject) => {
            this.ipcRenderer.send('datasources', { method: 'get'} );

            this.ipcRenderer.once('datasources-reply', (event, args) => {
                resolve(args.msg as Datasource[]);
            });
        })
    }  

    addDatasource(datasource: Datasource) {
        this.ipcRenderer.send('datasources', { method: 'add', datasource } );

        this.ipcRenderer.once('datasources-reply', (event, arg) => {
            console.log(arg)
        });
    }  
}
