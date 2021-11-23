import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CmainboxComponent } from './cmainbox/cmainbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CfooterComponent,
    CmainboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
