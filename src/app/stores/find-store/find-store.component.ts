import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-find-store',
    templateUrl: './find-store.component.html',
    styleUrls: ['./find-store.component.css']
})
export class FindStoreComponent implements OnInit {

    zipcode = "";

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

    }

    search() {
        this.router.navigate([ 'search', this.zipcode ], { relativeTo: this.route });
    }

}
