import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ToDoListFeatureListModule} from '@to-do-list-app/to-do-list/feature-list';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import {ToDoListFeatureCreateModule} from "@to-do-list-app/to-do-list/feature-create";
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ToDoListFeatureListModule,
    ToDoListFeatureCreateModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/api', 'http://localhost:8090/api', 'http://localhost:4200/api'],
        sendAccessToken: true
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
