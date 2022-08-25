import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ConversaModel } from '../models/conversa.model';
import { ChatPagePage } from '../pages/chat-page/chat-page.page';
import { UserNgrxService } from '../services/ngrx/user-ngrx.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private userNgrx: UserNgrxService) {
    this.userNgrx.getUser().subscribe(value => {
      console.log(value);
    });
  }

  goToChatPage() {
    this.router.navigateByUrl('chat-page');
  }
}
