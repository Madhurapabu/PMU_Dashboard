import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoltageComponent } from './voltage/voltage.component';
import { CurrentComponent } from './current/current.component';
import { MaindashComponent } from './maindash/maindash.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { RocofComponent } from './rocof/rocof.component';
import { GpsComponent } from './gps/gps.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
	url: 'http://127.0.0.1:5000', // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    AppComponent,
    VoltageComponent,
    CurrentComponent,
    MaindashComponent,
    FrequencyComponent,
    RocofComponent,
    GpsComponent,
    AuthenticatedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
		SocketIoModule.forRoot(config)
  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
