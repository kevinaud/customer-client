import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StoresRoutingModule } from './stores.routing';

import { StoreService } from './store.service';
import { StoresComponent } from './stores.component';
import { FindStoreComponent } from './find-store/find-store.component';
import { StoreSearchComponent } from './store-search/store-search.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StoreAddressViewComponent } from './store-detail/store-address-view/store-address-view.component';
import { StoreHoursViewComponent } from './store-detail/store-hours-view/store-hours-view.component';
import { StoreSearchResultViewComponent } from './store-search/store-search-result-view/store-search-result-view.component';

@NgModule({
    imports: [
        SharedModule,
        StoresRoutingModule
    ],
    declarations: [
        StoresComponent,
        FindStoreComponent,
        StoreSearchComponent,
        StoreDetailComponent,
        StoreAddressViewComponent,
        StoreHoursViewComponent,
        StoreSearchResultViewComponent
    ],
    providers: [
        StoreService 
    ]
})
export class StoresModule { }
