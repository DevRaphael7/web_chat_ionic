import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async warnngAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  public async alertError(message: string) {
    const alert = await this.alertController.create({
      header: 'Ocorreu um erro',
      message: message,
      buttons: ['OK']
    }) 

    await alert.present();
  }
}
