import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserNgrxService } from 'src/app/services/ngrx/user-ngrx.service';
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

  constructor(private modalCtrl: ModalController, private userRedux: UserNgrxService, private router: Router) { }

  ngOnInit() {
    this.verifyUserIsSeted()
  }

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
  verifyUserIsSeted = () => {
    let verify: boolean;
    this.userRedux.getUser().subscribe(value => {
      if(value.nome) verify = true;
    })

    if(verify){
      this.router.navigateByUrl('home');
    }
  }

}
