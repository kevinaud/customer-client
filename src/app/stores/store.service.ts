import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Store, mockStores } from './store';

@Injectable()
export class StoreService {

    constructor() { }

    findStores(zipcode: string): Observable<Store[]> {
        return Observable.of(mockStores); 
    }

    getStore(storeId: string): Observable<Store> {
        for (let i = 0; i < mockStores.length; i++) {
            if (mockStores[i].id === storeId) {
                return Observable.of(mockStores[i]);
            }
        }

        return Observable.throw('not found');
    }

}
