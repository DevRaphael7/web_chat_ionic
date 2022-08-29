import { ErrorResponseApi } from './../../models/error-response-api.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService/api.service';
import { UserNgrxService } from 'src/app/services/ngrx/user-ngrx.service';
import { ResponseApi } from 'src/app/models/response-api.model';
import { AlertService } from 'src/app/services/AlertService/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api: ApiService,
    private userRedux: UserNgrxService,
    private alert: AlertService  
  ) { }

  public async getContactByMyUserInApi(): Promise<UserInformations[]> {
    const user = await this.userRedux.getUserState();

    return new Promise((resolve, reject) => {
      this.api.getMethod<ResponseApi<UserInformations[]>>(`contact/${user.numero}`)
      .subscribe({
        next: (value) => {
          resolve(value.data)
        },
        error: (error: ErrorResponseApi<ResponseApi<null>>) => {
          console.log(error)
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
}
