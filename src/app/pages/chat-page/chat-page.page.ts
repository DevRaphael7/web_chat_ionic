import { UserInformations } from 'src/app/models/user-informations.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
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
    private route: ActivatedRoute, 
    private contactNgRx: ContactNgrxService
  ) { }

  ngOnInit() {
    this.getContactByNumber()
    this.route.queryParams
    .subscribe((params: any) => {
        this.number = params.id;
        setTimeout(() => this.showBubbles = true, 2000)
      }
    );
  }

  async getContactByNumber() {
    this.user = (await this.contactNgRx.getContactsState()).find(value => value.id == this.number);
  }

  getNumber = () => this.number;

  getUser() {
    return this.user;
  }
}
