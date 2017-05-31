import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { PhonesDetailsComponent } from './phones-details/phones-details.component';
import { HomeComponent } from './home/home.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { LoginComponent } from './login/login.component';

import { CounterService } from './counter.service';
import { PhonesService } from './phones.service';
import { SessionService } from './session.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'phones',  component: PhonesListComponent, canActivate: [SessionService] },
  { path: 'phones/new',  component: AddPhoneComponent, canActivate: [SessionService] },
  { path: 'phones/:id', component: PhonesDetailsComponent, canActivate: [SessionService] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhonesListComponent,
    PhonesDetailsComponent,
    HomeComponent,
    AddPhoneComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService, PhonesService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
