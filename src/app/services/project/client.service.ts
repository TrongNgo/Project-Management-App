import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {environment} from '@environment';
import {ClientModel} from '@app/models/project/client.model';
import {getRandomClients} from '@app/data/project';

@Injectable()
export class ClientService {
    constructor() {
    }

    getClients(): Observable<ClientModel[]> {
        if (environment.debug) {
            console.log('API: get Clients');
        }

        return of(getRandomClients(20));
    }
}
