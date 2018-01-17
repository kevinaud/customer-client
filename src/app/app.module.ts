import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        MatToolbarModule,
        routing
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
