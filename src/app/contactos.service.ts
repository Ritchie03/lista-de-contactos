import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }
  contacts=[];
  addContact(name, phone, mail, coments, dateBirth) {
    let contact = {
      Nombre: name,
      Telefono: phone,
      Mail: mail,
      Coments:coments,
      Cumple: dateBirth
    };
    this.contacts.push(contact);
  }
}
