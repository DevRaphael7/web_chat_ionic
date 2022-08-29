import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/controllers/UserController/user.service';
import { ErrorResponseApi } from 'src/app/models/error-response-api.model';
import { ResponseApi } from 'src/app/models/response-api.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { AlertService } from 'src/app/services/AlertService/alert.service';
import { InterfaxeUxReduxService } from 'src/app/services/ngrx/interfaxe-ux-redux.service';

@Component({
  selector: 'app-to-do-list-user',
  templateUrl: './to-do-list-user.page.html',
  styleUrls: ['./to-do-list-user.page.scss'],
})
export class ToDoListUserPage implements OnInit {

  private users: UserInformations[] = [];

  constructor(
    private userApi: UserService, 
    private uxRedux: InterfaxeUxReduxService,
    private alert: AlertService  
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getUsers = () => this.users;

  async getAllUsers() {
    this.uxRedux.setSpinner(true)
    await this.userApi.getAllUsers()
    .then(value => {
      Object.keys(value.data).map(key => {
        this.users.push(value.data[key])
      })
    }).catch((erro: ErrorResponseApi<ResponseApi<null>>) => {
      if(erro.status == 0){
        this.alert.alertError('Ocorreu um erro ao tentar se comunicar com a API')
        return;
      }

      this.alert.alertError(erro.error.message);
    })
    this.uxRedux.setSpinner(false)
  }

}
