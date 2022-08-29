import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ConversaModel } from '../models/conversa.model';
import { UserInformations } from '../models/user-informations.model';
import { ChatPagePage } from '../pages/chat-page/chat-page.page';
import { UserNgrxService } from '../services/ngrx/user-ngrx.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private currentUser: UserInformations = {
    nome: "Nome usuário..."
  };

  constructor(
    private router: Router,
    private userNgrx: UserNgrxService
  ) {
    this.getUserStoreRedux()
  }

  getCurrentUser = () => this.currentUser;

  goToChatPage() {
    this.router.navigateByUrl('chat-page');
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
