import { Component, Input, OnInit } from '@angular/core';
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

  @Input() friend: UserInformations; 
  private user: UserInformations;
  private messages: MessageUser[] = [];

  constructor(
    private socket: Socket, 
    private userNgrx: UserNgrxService
  ) {
    this.getMessagesSocket().subscribe();
  }

  ngOnInit(): void {
      console.log(this.friend)
      this.getUser()
  }

  getMessages = () => this.messages;

  async getUser() {
    this.user = await this.userNgrx.getUserState();
  }

  verifyUserMessage(numero: number) {
    return this.user.numero === numero;
  }

  getMessagesSocket() {
    return new Observable(() => {
      this.socket.on('conv', (data: MessageUser) => {
        if(data.numeroDestin == this.user.numero && data.numero == this.friend.id){
          this.messages.push(data);
        } else if(data.numero == this.user.numero){
          this.messages.push(data)
        }
      });
    });
  }

}
