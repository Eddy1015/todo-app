import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ToDoListFeatureListModule} from '@to-do-list-app/to-do-list/feature-list';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ToDoListFeatureListModule,
    HttpClientModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
