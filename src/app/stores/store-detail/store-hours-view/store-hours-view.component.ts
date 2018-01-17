import { Component, OnInit, Input } from '@angular/core';

import { StoreHours } from '../../store';

@Component({
    selector: 'store-hours-view',
    templateUrl: './store-hours-view.component.html',
    styleUrls: ['./store-hours-view.component.css']
})
export class StoreHoursViewComponent implements OnInit {

    @Input() hours: StoreHours;

    constructor() { }

    ngOnInit() { }

}
