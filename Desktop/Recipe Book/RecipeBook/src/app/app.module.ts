import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptorService } from './Auth/auth-interceptor.service';
import { sharedModule } from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    sharedModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: authInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
