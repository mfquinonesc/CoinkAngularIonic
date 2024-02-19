import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginComponent } from './pages/login/login.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { AccountComponent } from './pages/account/account.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { GenderlistComponent } from './components/genderlist/genderlist.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocdateComponent } from './components/docdate/docdate.component';
import { BirthdateComponent } from './components/birthdate/birthdate.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    PhoneComponent,
    AccountComponent,
    GenderlistComponent,
    ContratComponent,
    WellcomeComponent,
    ItemlistComponent,
    PhoneComponent,
    DocdateComponent,   
    BirthdateComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    IonicModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
