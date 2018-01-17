import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
    selector: 'app-store-detail',
    templateUrl: './store-detail.component.html',
    styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

    $store: Observable<Store>;
    store: Store;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stores: StoreService
    ) { }

    ngOnInit() {
        this.$store = this.route.paramMap.switchMap((params: ParamMap) => {
            return this.stores.getStore(params.get('id')); 
        });

        this.$store.subscribe(
            store => this.store = store,
            error => this.back()
        );
    }

    back() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }

}
