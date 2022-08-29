import { UserInformations } from 'src/app/models/user-informations.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ContactNgrxService } from 'src/app/services/ngrx/contact-ngrx.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss']
})
export class ChatPagePage implements OnInit {

  private number: number = 0;
  public showBubbles: boolean = false;
  private user: UserInformations;

  constructor(
    private route: ActivatedRouteSnapshot, 
    private contactNgRx: ContactNgrxService
  ) { this.getContactByNumber() }

  ngOnInit() {
    this.route.queryParams
    .subscribe((params: any) => {
        this.number = params.id;
        this.showBubbles = true;
      }
    );
  }

  async getContactByNumber() {
    this.user = (await this.contactNgRx.getContactsState()).find(value => value.numero == this.number);
  }

  getNumber = () => this.number;

  getUser() {
    return this.user;
  }
}
