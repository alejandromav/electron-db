const { ipcMain } = require('electron');
const DatasourceService = require('./../model/datasources.service');
const datasourceService = new DatasourceService();
const log4js = require('log4js');
const logger = log4js.getLogger('IPC');

module.exports = class DatasourceIPCController {
    constructor() { }

    register() {
        ipcMain.on('datasources', (event, arg) => {
            logger.info(`[DATASOURCES] :: ${JSON.stringify(arg)}`);
            switch (arg.method) {
                case 'get':
                    this.getDatasources(event);
                    break;
                case 'add':
                    this.addDatasources(event,arg.datasource);
                    break;
            }
        });
    }

    /**
     *  GET ALL DATASOURCES
     */
    getDatasources($e) {
        datasourceService.getDatasources().then(res => {
            $e.sender.send('datasources-reply', { status: 200, msg: res });
        })
        .catch(this.errorHandler);
    }


    /**
     *  ADD NEW DATASOURCE
     */
    addDatasources($e, datasource) {
        datasourceService.addDatasource(datasource).then(res => {
            $e.sender.send('datasources-reply', { status: 201, msg: `Datasource ${arg.datasource.name} created ok!` });
        })
        .catch(this.errorHandler);
    }

    /**
     * ERROR HANDLER
     */
    erroHandler(err) {
        $e.sender.send('datasources-reply', { status: 500, msg: err });
    }
}