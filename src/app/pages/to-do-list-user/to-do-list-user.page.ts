import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/controllers/UserController/user.service';
import { UserInformations } from 'src/app/models/user-informations.model';
import { InterfaxeUxReduxService } from 'src/app/services/ngrx/interfaxe-ux-redux.service';

@Component({
  selector: 'app-to-do-list-user',
  templateUrl: './to-do-list-user.page.html',
  styleUrls: ['./to-do-list-user.page.scss'],
})
export class ToDoListUserPage implements OnInit {

  private users: UserInformations[] = [];

  constructor(private userApi: UserService, private uxRedux: InterfaxeUxReduxService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getUsers = () => this.users;

  async getAllUsers() {
    this.uxRedux.setSpinner(true)
    await this.userApi.getAllUsers().then(value => {
      Object.keys(value.data).map(key => {
        this.users.push(value.data[key])
      })
    }).catch(erro => {
      console.log(erro)
    })
    this.uxRedux.setSpinner(false)
  }



}
