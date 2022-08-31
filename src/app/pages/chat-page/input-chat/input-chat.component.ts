import { UserInformations } from 'src/app/models/user-informations.model';
import { Component, Input, OnInit } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Socket } from 'ngx-socket-io';
import { MessageUser } from 'src/app/models/messages-user.model';
import { UserNgrxService } from 'src/app/services/ngrx/user-ngrx.service';

@Component({
  selector: 'app-input-chat',
  templateUrl: './input-chat.component.html',
  styleUrls: ['./input-chat.component.scss'],
})
export class InputChatComponent implements OnInit {

  @Input() friend: UserInformations = {
    nome: ''
  };

  messagesUser: MessageUser = {
    message: null,
    numero: 24455
  };

  constructor(private socket: Socket, private userNgRx: UserNgrxService) {  }

  ngOnInit(): void {
    this.userNgRx.getUser().subscribe(value => {
      this.messagesUser = {
        ...this.messagesUser,
        numero: value.numero,
        numeroDestin: this.friend.id
      }
    })
  }

  sendMessage() {
    this.socket.emit('conversa', this.messagesUser);
  }



}
