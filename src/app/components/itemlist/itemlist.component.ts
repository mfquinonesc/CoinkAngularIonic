import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Identification } from 'src/app/models/identification';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss'],
})
export class ItemlistComponent implements OnInit {

  itemArray: Identification[] = [];  

  @Output() idEvent = new EventEmitter<Identification>();

  constructor(private accountService: AccountService) {
    this.loadItems();
  }

  ngOnInit() { }

  loadItems() {
    this.accountService.getDocumentTypes().subscribe({
      next: (value) => {
        if (value) {
          this.itemArray = value as Identification[];
        }
      },
    })
  }

  get isDisable() {
    let result = true;
    this.accountService.getIsIdDisable().subscribe({
      next: (value) => {
        result = value as boolean;
      },
    })
    return result;
  }

  selectItem(ident: Identification) {
    let account = new Account();
    this.accountService.getAccount().subscribe({
      next:(value) =>{
        account = value as Account;
      },
    });
    account.identificaciton = ident;
    this.accountService.setAccount(account); 
    this.idEvent.emit(ident);
  }

  hide() {
    this.accountService.setIsIdDisable(true);
  }
}
