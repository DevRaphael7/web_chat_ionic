import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateAUserComponent } from '../create-auser/create-auser.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  public slideOpts = {
    grabCursor: false,
    effect: 'cube',
    pagination: false,
    initialSlide: 1,
    speed: 400
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: CreateAUserComponent,
      animated: true,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      cssClass: 'radius-10'
    });

    await modal.present();
  }

}
