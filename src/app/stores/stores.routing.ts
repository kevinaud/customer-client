import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoresComponent } from './stores.component';
import { FindStoreComponent } from './find-store/find-store.component';
import { StoreSearchComponent } from './store-search/store-search.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

const storesRoutes: Routes = [
	{
		path: 'stores',
        component: StoresComponent,
        children: [
            {
                path: '',
                component: FindStoreComponent
            }, 
            {
                path: 'search/:zip',
                component: StoreSearchComponent
            }, 
            {
                path: ':id',
                component: StoreDetailComponent
            }
        ]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(storesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class StoresRoutingModule { }
