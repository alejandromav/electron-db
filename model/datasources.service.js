const Datastore = require('nedb');
const log4js = require('log4js');
const logger = log4js.getLogger('DB');

module.exports = class DatasourceService {
    constructor () {
        this.db = new Datastore({ filename: 'db/datasources', autoload: true });
        logger.info(`db/datasources init`);
    }

    getDatasources() {
        return new Promise((resolve,reject) => {
            this.db.find({}, function(err, docs) {
                err ? reject(err) : resolve(docs);
            })
        });
    }

    addDatasource(datasource) {
        datasource['createdAt'] = new Date();
        return new Promise((resolve, reject) => {
            this.db.insert(datasource, function (err, newDoc) {
                err ? reject(err) : resolve();
            })
        });
    }
};