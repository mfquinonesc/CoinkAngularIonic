import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.scss'],
})
export class BirthdateComponent implements OnInit {

  @Output() dateEvent = new EventEmitter<string>();

  pickedDate: string = new Date().toISOString();

  constructor(private accountService: AccountService) { }

  ngOnInit() { }

  get isDisable() {
    let result = true;
    this.accountService.getIsBirthDateDisable().subscribe({
      next: (value) => {
        result = value as boolean;
      },
    })
    return result;
  }

  hide() {
    this.accountService.setIsBirthDateDisable(true);
  }

  pickDate(event:CustomEvent){
    let account = new Account();
    this.pickedDate = event.detail.value;
    this.accountService.getAccount().subscribe({
      next: (value) => {
        account = value as Account;
        account.birthDate = this.pickedDate;
      },
    });
    this.accountService.setAccount(account);
    this.dateEvent.emit(this.pickedDate);
    this.hide();
  }

  confirm(datetime: IonDatetime) {
    datetime.confirm();
    this.hide();
  }

  cancel(datetime: IonDatetime) {
    datetime.cancel();
    this.hide();
  }
}
