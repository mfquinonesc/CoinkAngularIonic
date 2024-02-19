import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonLoading } from '@ionic/angular';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss'],
})
export class ContratComponent implements OnInit {

  isAccepted: boolean = false;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() { }

  create(loader: IonLoading) {
    if (this.isAccepted) {
      let account = new Account();
      this.accountService.getAccount().subscribe({
        next: (value) => {
          account = value as Account;
        },
      });
      this.accountService.createAccount(account).subscribe({
        next: (value) => {
          console.log(value);
          console.log(account);
        },
        complete: () => {
          loader.dismiss();
          this.router.navigateByUrl('well');
        },
      });
    }
  }

}
