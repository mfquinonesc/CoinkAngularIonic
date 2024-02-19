import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Account } from '../models/account';
import { Genere } from '../models/genere';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private isBirthDateDisable = new BehaviorSubject<boolean>(true);
  private isDocDateDisable = new BehaviorSubject<boolean>(true);
  private isIdDisable = new BehaviorSubject<boolean>(true);
  private isGenereDisable = new BehaviorSubject<boolean>(true);
  private account = new BehaviorSubject<Account>(new Account());

  generePath: string = 'https://api.bancoink.biz/qa/signup/genders?apiKey=030106';
  idPath: string = 'https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106';
  
  //Firebase API 
  testAPI: string = 'https://coinkapi-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  getIsBirthDateDisable() {
    return this.isBirthDateDisable.asObservable();
  }

  setIsBirthDateDisable(value: boolean) {
    this.isBirthDateDisable.next(value);
  }

  getIsDocDateDisable() {
    return this.isDocDateDisable.asObservable();
  }

  setIsDocDateDisable(value: boolean) {
    this.isDocDateDisable.next(value);
  }

  getIsGenereDisable() {
    return this.isGenereDisable.asObservable();
  }

  setIsGenereDisable(value: boolean) {
    this.isGenereDisable.next(value);
  }

  getIsIdDisable() {
    return this.isIdDisable.asObservable();
  }

  setIsIdDisable(value: boolean) {
    this.isIdDisable.next(value);
  }

  getAccount() {
    return this.account.asObservable();
  }

  setAccount(value: Account) {
    this.account.next(value);
  }

  getDocumentTypes(): Observable<any> {
    return this.http.get(this.idPath);
  }

  // The enpoint that gets the genere types returns a payload so
  // This function was implemented this way
  getGenereTypes() {
    let list = [];
    list.push(new Genere(1, 'Femenino'));
    list.push(new Genere(2, 'Masculino'));
    return list;
  }

  // Create a new account
  createAccount(account: Account): Observable<any> {
    return this.http.post(`${this.testAPI}/data.json`, account);
  }  
}
