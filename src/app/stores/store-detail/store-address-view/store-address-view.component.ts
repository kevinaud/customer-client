import { Component, OnInit, Input } from '@angular/core';

import { StoreAddress } from '../../store';

@Component({
    selector: 'store-address-view',
    templateUrl: './store-address-view.component.html',
    styleUrls: ['./store-address-view.component.css']
})
export class StoreAddressViewComponent implements OnInit {

    @Input() address: StoreAddress;

    constructor() { }

    ngOnInit() { }

}
