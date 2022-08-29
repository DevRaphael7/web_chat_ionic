import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/controllers/UserController/user.service';
import { UserInformations } from 'src/app/models/user-informations.model';
import { AlertService } from 'src/app/services/AlertService/alert.service';
import { CameraService } from 'src/app/services/camera/camera.service';
import { InterfaxeUxReduxService } from 'src/app/services/ngrx/interfaxe-ux-redux.service';

@Component({
  selector: 'app-create-auser',
  templateUrl: './create-auser.component.html',
  styleUrls: ['./create-auser.component.scss'],
})
export class CreateAUserComponent {

  private user: UserInformations = {
    nome: null,
    avatar: '../../../../assets/icon/man-person.webp'
  };

  constructor(
    private camera: CameraService,
    private userApi: UserService,
    private alert: AlertService,
    private interfaceUxRedux: InterfaxeUxReduxService,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  getSpinnerState = () => this.interfaceUxRedux.getSpinnerState();

  async takePhoto() {
    const base64 = await this.camera.takePicture();
    this.user.avatar = base64;
  }

  async closeModal(){
    await this.modalCtrl.dismiss(null);
  }

  setName = (name: string) => this.user['nome'] = name;
  getUser = () => this.user;

  sendUserApi(){
    this.interfaceUxRedux.setSpinner(true);

    if(this.validated()) return;
    
    setTimeout(async() => {
      await this.userApi.saveUser(this.user)
      .then(value => {
        this.alert.warnngAlert(value.message);
        this.router.navigateByUrl('home')
        this.closeModal()
      }).catch((error) =>  {
        console.log(error);
      })
      this.interfaceUxRedux.setSpinner(false);
    }, 4000);
  }

  validated() {
    if(!this.user["nome"]){
      this.alert.warnngAlert("Nome inválido");
      this.interfaceUxRedux.setSpinner(false);
      return true;
    }
    return false;
  }

}
