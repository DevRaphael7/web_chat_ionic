import { ContactService } from './../controllers/ContactController/contact.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformations } from '../models/user-informations.model';
import { UserNgrxService } from '../services/ngrx/user-ngrx.service';
import { InterfaxeUxReduxService } from '../services/ngrx/interfaxe-ux-redux.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private currentUser: UserInformations = {
    nome: "Nome usuário..."
  };

  private contacts: UserInformations[] = [];

  constructor(
    private router: Router,
    private userNgrx: UserNgrxService,
    private contatcApi: ContactService,
    private uxNgrx: InterfaxeUxReduxService
  ) {
    this.getUserStoreRedux()
    this.getAllContactInFlaskApi()
  }

  async getAllContactInFlaskApi() {
    this.uxNgrx.setSpinner(true)
    this.contacts = await this.contatcApi.getAllContactsState()
    this.uxNgrx.setSpinner(false)
  }

  getContacts = () => this.contacts;

  getCurrentUser = () => this.currentUser;

  goToChatPage(user: UserInformations) {
    this.router.navigateByUrl('chat-page?id=' + user.id);
  }

  getUserStoreRedux() {
    this.userNgrx.getUser().subscribe(value => {
      this.currentUser = value;
    })
  }

  goToTodoListUsersPage() {
    this.router.navigateByUrl('to-do-list-user')
  }
}
