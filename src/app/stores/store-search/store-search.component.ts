import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.component.html',
  styleUrls: ['./store-search.component.css']
})
export class StoreSearchComponent implements OnInit {

    $stores: Observable<Store[]>;
    stores: Store[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private storeService: StoreService
    ) { }

    ngOnInit() {
        this.$stores = this.route.paramMap.switchMap((params: ParamMap) => {
            return this.storeService.findStores(params.get('zip')); 
        });

        this.$stores.subscribe(
            stores => this.stores = stores,
            error => this.back()
        );
    }

    back() {
        this.router.navigate(['..', '..'], { relativeTo: this.route });
    }

}
