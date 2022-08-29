import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/controllers/UserController/user.service';
import { ErrorResponseApi } from 'src/app/models/error-response-api.model';
import { ResponseApi } from 'src/app/models/response-api.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { AlertService } from 'src/app/services/AlertService/alert.service';
import { InterfaxeUxReduxService } from 'src/app/services/ngrx/interfaxe-ux-redux.service';
import { ContactService } from 'src/app/controllers/ContactController/contact.service';

@Component({
  selector: 'app-to-do-list-user',
  templateUrl: './to-do-list-user.page.html',
  styleUrls: ['./to-do-list-user.page.scss'],
})
export class ToDoListUserPage implements OnInit {

  private users: UserInformations[] = [];
  private isLoading: boolean = false;

  constructor(
    private userApi: UserService, 
    private uxRedux: InterfaxeUxReduxService,
    private alert: AlertService,
    private contactApi: ContactService
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

  async addContact(user: UserInformations) {
    if(this.isLoading) return;
    this.isLoading = true;
    this.uxRedux.setSpinner(true);
    this.contactApi.saveContactForUser(user.id)
    this.uxRedux.setSpinner(false);
    this.isLoading = false;
  }

}
