import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatecolorComponent } from './datecolor/datecolor.component';
import { DatePipe } from '@angular/common';
import { DisplaydataComponent } from './displaydata/displaydata.component';

@NgModule({
  declarations: [
    AppComponent,
    DatecolorComponent,
    DisplaydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
