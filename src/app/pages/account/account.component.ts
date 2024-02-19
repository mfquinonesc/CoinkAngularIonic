import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { Genere } from 'src/app/models/genere';
import { Identification } from 'src/app/models/identification';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  accountForm = this.formBuilder.group({
    identType: ['', [Validators.required]],
    idNumber: ['', [Validators.required]],
    docDate: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    genere: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pin: ['', [Validators.required]],
    emailConfirm: ['', []],
    pinConfirm: ['', []]
  });

  isPin: boolean = false;
  isPinConfirm: boolean = false;
  identTypeTouched: boolean = false;
  genereTouched: boolean = false;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() { }

  get identTypeValue() {
    return this.accountForm.value.identType;
  }
  get idNumberValue() {
    return this.accountForm.value.idNumber;
  }
  get docDateValue() {
    return this.accountForm.value.docDate;
  }
  get birthDateValue() {
    return this.accountForm.value.birthDate;
  }
  get genereValue() {
    return this.accountForm.value.genere;
  }
  get emailValue() {
    return this.accountForm.value.email;
  }
  get pinValue() {
    return this.accountForm.value.pin;
  }
  get emailConfirmValue() {
    return this.accountForm.value.emailConfirm;
  }
  get pinConfirmValue() {
    return this.accountForm.value.pinConfirm;
  }


  get identType() {
    return this.accountForm.controls.identType;
  }
  get idNumber() {
    return this.accountForm.controls.idNumber;
  }
  get docDate() {
    return this.accountForm.controls.docDate;
  }
  get birthDate() {
    return this.accountForm.controls.birthDate;
  }
  get genere() {
    return this.accountForm.controls.genere;
  }
  get email() {
    return this.accountForm.controls.email;
  }
  get pin() {
    return this.accountForm.controls.pin;
  }

  get identTypeFill() {
    return this.identTypeValue ? true : false;
  }
  get idNumberFill() {
    return this.idNumberValue ? true : false;
  }
  get docDateFill() {
    return this.docDateValue ? true : false;
  }
  get birthDateFill() {
    return this.birthDateValue ? true : false;
  }
  get genereFill() {
    return this.genereValue ? true : false;;
  }
  get emailFill() {
    return this.emailValue ? true : false;;
  }
  get pinFill() {
    return this.pinValue ? true : false;;
  }
  get emailConfirmFill() {
    return this.emailConfirmValue ? true : false;;
  }
  get pinConfirmFill() {
    return this.pinConfirmValue ? true : false;;
  }


  get emailError() {
    if (this.emailValue) {
      return this.emailValue != this.emailConfirmValue;
    } else {
      return false;
    }
  }
  get pinError() {
    if (this.pinValue) {
      return this.pinValue != this.pinConfirmValue;
    } else {
      return false;
    }
  }

  get isValid() {
    return this.accountForm.valid && !this.emailError && !this.pinError;
  }

  showPin() {
    this.isPin = !this.isPin;
  }

  showPinConfirm() {
    this.isPinConfirm = !this.isPinConfirm;
  }

  displayItems() {
    this.identTypeTouched = true;
    this.accountService.setIsIdDisable(false);
  }

  displayGeneres() {
    this.genereTouched = true;
    this.accountService.setIsGenereDisable(false);
  }

  displayDocDate() {
    this.accountService.setIsDocDateDisable(false);
  }

  displayBirthDate() {
    this.accountService.setIsBirthDateDisable(false);
  }

  setIdType(ident: Identification) {
    this.accountForm.patchValue({
      identType: ident.description
    });
  }

  setGenereType(genere: Genere) {
    this.accountForm.patchValue({
      genere: genere.notation
    });
  }

  setDocDate(date: string) {
    this.accountForm.patchValue({
      docDate: new Date(date).toLocaleDateString()
    });
  }

  setBirthDate(date: string) {
    this.accountForm.patchValue({
      birthDate: new Date(date).toLocaleDateString()
    });
  }

  continue() {
    if (this.isValid) {
      let account = new Account();
      this.accountService.getAccount().subscribe({
        next: (value) => {
          account = value as Account;
        },
      });
      account.birthDate = this.birthDateValue!;
      account.documentDate = this.docDateValue!;
      account.documentNumber = this.idNumberValue?.toString()!;
      account.email = this.emailValue!;
      account.genere = new Genere(0, this.genereValue!);
      account.identificaciton = new Identification(0, '', this.identTypeValue!);
      account.pin = this.pinValue!;
      this.accountService.setAccount(account);
      this.router.navigateByUrl('contrat');
    }
  }

}
