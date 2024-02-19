import { Identification } from "./identification";
import { Genere } from "./genere";

export class Account {

    identificaciton: Identification;
    phoneNumber: string;
    documentNumber: string;
    documentDate: string;
    birthDate: string;
    genere: Genere;
    email: string;
    pin: string;

    constructor(identificaciton?: Identification, phoneNumber?: string, documentNumber?: string, documentDate?: string, birthDate?: string, genere?: Genere, email?: string, pin?: string) {
        this.identificaciton = identificaciton!;
        this.phoneNumber = phoneNumber!;
        this.documentNumber = documentNumber!;
        this.documentDate = documentDate!;
        this.birthDate = birthDate!;
        this.genere = genere!;
        this.email = email!;
        this.pin = pin!;
    }
}
