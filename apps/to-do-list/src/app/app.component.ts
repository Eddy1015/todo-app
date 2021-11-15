import {Component} from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'to-do-list-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-list';
  loggedIn: boolean = false;

  constructor(private oauthService: OAuthService) {
    this.configure();
    this.oauthService.events.subscribe(e => {
      this.loggedIn = this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
    });
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8090/auth/realms/dev',
    redirectUri: window.location.origin,
    clientId: 'todo-app',
    scope: 'openid profile email offline_access',
    responseType: 'code',
    disableAtHashCheck: true,
    showDebugInformation: true
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
