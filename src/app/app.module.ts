// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppWhat }   from './app.what';
import { AppMantra }   from './app.mantra';
import { AppTreMantra }   from './app.tremantra';
import { NguiParallaxScrollModule }  from '@ngui/parallax-scroll';
import {Ng2ScrollimateModule} from 'ng2-scrollimate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdTabsModule} from '@angular/material';
import {MdExpansionModule} from '@angular/material';

@NgModule({
  imports: [BrowserModule, NguiParallaxScrollModule, Ng2ScrollimateModule, BrowserAnimationsModule, MdTabsModule, MdExpansionModule],
  declarations: [AppComponent, AppWhat, AppMantra, AppTreMantra ],
  bootstrap: [ AppComponent, AppWhat, AppMantra, AppTreMantra ]
})
export class AppModule { }

import {enableProdMode} from '@angular/core';

enableProdMode();
// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
