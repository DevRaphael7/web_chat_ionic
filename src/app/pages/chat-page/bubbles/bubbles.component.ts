import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { MessageUser } from 'src/app/models/messages-user.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { UserNgrxService } from 'src/app/services/ngrx/user-ngrx.service';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss'],
})
export class BubblesComponent implements OnInit {

  private user: Observable<UserInformations> = null;
  private messages: MessageUser[] = [];

  constructor(private socket: Socket, private userNgrx: UserNgrxService) {
    this.getMessagesSocket().subscribe();
    this.user = this.userNgrx.getUser();
  }

  ngOnInit() {}

  getMessages = () => this.messages;
  getUser = () => this.user;

  verifyUserMessage(numero: number) {
    let numberUser;
    this.user.subscribe(value => numberUser = value.numero);
    return numberUser === numero;
  }

  getMessagesSocket() {
    return new Observable(() => {
      this.socket.on('conv', (data: MessageUser) => {
        this.messages.push(data);
      });
    });
  }

}
