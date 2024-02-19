import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginComponent } from './pages/login/login.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { AccountComponent } from './pages/account/account.component';
import { ContratComponent } from './pages/contrat/contrat.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'account', component: AccountComponent },
  { path: 'contrat', component: ContratComponent },
  { path: 'well', component: WellcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
