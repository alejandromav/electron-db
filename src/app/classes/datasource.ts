import { DatasourceEnum } from './datasource-enum';

export class Datasource {
    type: DatasourceEnum;
    name: string;
    uri: string;
    user: string;
    password: string;

}