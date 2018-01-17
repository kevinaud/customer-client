import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '../../store';

@Component({
    selector: 'store-search-result-view',
    templateUrl: './store-search-result-view.component.html',
    styleUrls: ['./store-search-result-view.component.css']
})
export class StoreSearchResultViewComponent implements OnInit {

    @Input() store: Store;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }

    view() {
        this.router.navigate([ '../..', this.store.id ], { relativeTo: this.route}); 
    }

}
