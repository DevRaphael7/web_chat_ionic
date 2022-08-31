import { ErrorResponseApi } from './../../models/error-response-api.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService/api.service';
import { UserNgrxService } from 'src/app/services/ngrx/user-ngrx.service';
import { ResponseApi } from 'src/app/models/response-api.model';
import { AlertService } from 'src/app/services/AlertService/alert.service';
import { ContactNgrxService } from 'src/app/services/ngrx/contact-ngrx.service';

interface SaveContact{
  numero: number;
  numero_friend: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: UserInformations[] = [];

  constructor(
    private api: ApiService,
    private userRedux: UserNgrxService,
    private alert: AlertService,
    private contactRedux: ContactNgrxService
  ) { 
    this.api.setUrl('http://127.0.0.1:5000');
    this.contactRedux.getContactsState().then(value => this.contacts = value)
  }

  public async getAllContactsState() {
    if(this.contacts.length != 0){
      return this.contacts;
    } else {
      return this.getContactByMyUserInApi()
    }
  }

  public async getContactByMyUserInApi(): Promise<UserInformations[]> {
    const user = await this.userRedux.getUserState();

    return new Promise((resolve, reject) => {
      this.api.getMethod<ResponseApi<any>>(`/contact/${user.numero}`)
      .subscribe({
        next: (value) => {
          const listContacts: UserInformations[] = [];
          Object.keys(value.data).map(key => {
            listContacts.push(value.data[key])
          })
          this.contactRedux.setContacts(listContacts)
          resolve(listContacts)
        },
        error: (error: ErrorResponseApi<ResponseApi<null>>) => {
          if(error.status == 0){
            this.alert.alertError('Ocorreu um erro na comunicação com a API')
            return;
          } else if(error.status == 404){
            this.alert.alertError('Endpoint não encontrado! Status: 404')
            return
          }
          this.alert.alertError(error.error.message)
          reject([])
        }
      })
    })
  }

  public async saveContactForUser(friend_id: number) {
    const user = await this.userRedux.getUserState();

    const newContact: SaveContact = {
      numero: user.numero,
      numero_friend: friend_id
    };

    this.api.postMethod<SaveContact>('/contact', newContact)
    .subscribe({
      next: (value: ResponseApi<null>) => {
        console.log(value)
        this.alert.successAlert(value.message)
      },
      error: (error: ErrorResponseApi<ResponseApi<null>>) => {
        console.log(error);
        if(error.status == 0){
          this.alert.alertError('Ocorreu um erro na comunicação com a API')
          return;
        } else if(error.status == 404) {
          this.alert.alertError('Página não encontrada!')
          return;
        }
        
        this.alert.alertError(error.error.message);
      }
    })
  }


}
