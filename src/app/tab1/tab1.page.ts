import { Component } from '@angular/core';
import {ContactosService} from "../contactos.service"
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor( public alertController:AlertController, 
    protected contactosService:ContactosService) {}
    view = true;
    contacts = this.contactosService.contacts;
    addContact(Nombre, Telefono, Mail, Coments, Cumple) {
      this.contactosService.addContact(Nombre, Telefono, Mail, Coments, Cumple);
      this.presentAlert(Nombre);
    }
    async presentAlert(Nombre) {
      const alert = await this.alertController.create({
        header: "Hecho",
        subHeader: "El Contacto Fue Agregado",
        message: Nombre + "Ha sido agregado",
        buttons: ["OK"]
      });
  
      await alert.present();
    }
  
    async presentAlertConfirm(Nombre, i) {
      const alert = await this.alertController.create({
        header: "Eliminar",
        subHeader: "Seguro que deseas continuar",
        message: Nombre + "?",
        buttons: [
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {}
          },
          {
            text: "Continuar",
            handler: () => {
              this.contactosService.contacts.splice(i, 1);
            }
          }
        ]
      });
  
      await alert.present();
    }
 
}


