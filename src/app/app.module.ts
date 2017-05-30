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
import { CounterService } from './counter.service';
import { PhonesService } from './phones.service';
import { AddPhoneComponent } from './add-phone/add-phone.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'phones',  component: PhonesListComponent },
  { path: 'phones/new',  component: AddPhoneComponent },
  { path: 'phones/:id', component: PhonesDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PhonesListComponent,
    PhonesDetailsComponent,
    HomeComponent,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService, PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
