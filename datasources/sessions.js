import { DataSource } from 'apollo-datasource';
import sessions  from '../data/sessions.json' assert {type: 'json'};
import pkg from 'lodash';

export class SessionAPI extends DataSource{

    constructor(){
        super();
    }

    initialize(config){

    }

    getSessions(args){
        return pkg.filter(sessions, args);
    }

    getSessionById(id){
        const session = pkg.filter(sessions, {id: parseInt(id)});
        return session[0];
    }
}