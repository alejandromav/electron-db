const Datastore = require('nedb');

module.exports = class DatasourceService {
    constructor () {
        this.db = new Datastore({ filename: 'db/datasources', autoload: true });
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
            this.db.insert(datasource, function (err, newDoc) {   // Callback is optional
                // newDoc is the newly inserted document, including its _id
                // newDoc has no key called notToBeSaved since its value was undefined

                console.log(err,newDoc);

                err ? reject(err) : resolve();
            })
        });
    }
};