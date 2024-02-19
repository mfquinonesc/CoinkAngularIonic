import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Genere } from 'src/app/models/genere';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-genderlist',
  templateUrl: './genderlist.component.html',
  styleUrls: ['./genderlist.component.scss'],
})
export class GenderlistComponent implements OnInit {

  @Output() genereEvent = new EventEmitter<Genere>();

  genereArray: Genere[] = [];

  constructor(private accountService: AccountService) {
    this.loadItems();
  }

  ngOnInit() { }

  loadItems() {
    this.genereArray = this.accountService.getGenereTypes();
  }

  get isDisable() {
    let result = true;
    this.accountService.getIsGenereDisable().subscribe({
      next: (value) => {
        result = value as boolean;
      },
    })
    return result;
  }

  selectItem(genere: Genere) {
    let account = new Account();
    this.accountService.getAccount().subscribe({
      next:(value) =>{
        account = value as Account;
      },
    });
    account.genere = genere;
    this.accountService.setAccount(account); 
    this.genereEvent.emit(genere);   
  }

  hide(){
    this.accountService.setIsGenereDisable(true);
  }
}
