import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { reduxState, StoreModel as AppState } from './Ngrx/state.model';
import { localStorageSyncReducer } from './Ngrx/local-storage.redux';

const config: SocketIoConfig = {
  url: 'http://127.0.0.1:5000/'
};

const metaReducers: Array<MetaReducer<AppState>> = [ localStorageSyncReducer ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    StoreModule.forRoot(reduxState, { metaReducers }),
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
