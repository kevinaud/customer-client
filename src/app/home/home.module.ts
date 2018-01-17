import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing';


import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent 
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
