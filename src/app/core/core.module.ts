import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HomeModule } from '../home/home.module';
import { StoresModule } from '../stores/stores.module';

@NgModule({
    exports: [
        HomeModule,
        StoresModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
