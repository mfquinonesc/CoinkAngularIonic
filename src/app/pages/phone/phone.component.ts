import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {

  defaultNumber: string = '(xxx - xxxxxxx)'
  phoneNumber: string = '';
  isChecked: boolean = false;
  isTouched: boolean = false;

  constructor(private router: Router, private accountService: AccountService) {
    this.phoneNumber = this.defaultNumber;
  }

  ngOnInit() { }

  click(value: string) {
    if (this.phoneNumber == this.defaultNumber) {
      this.phoneNumber = '';
      this.isTouched = true;
    }
    if (this.phoneNumber.length < 10) {
      this.phoneNumber = this.phoneNumber + value;
    }
    this.checkNumber();
  }

  remove() {
    if (this.phoneNumber != this.defaultNumber) {
      this.phoneNumber = this.phoneNumber.substring(0, this.phoneNumber.length - 1);
    }
    this.checkNumber();
  }

  checkNumber() {
    this.isChecked = (this.phoneNumber.length == 10)
  }

  createAccount() {
    if (this.isChecked) {
      const account = new Account();
      account.phoneNumber = this.phoneNumber;
      this.accountService.setAccount(account);
      this.router.navigateByUrl('account');
      console.log(this.phoneNumber);
      
    }
  }
}
