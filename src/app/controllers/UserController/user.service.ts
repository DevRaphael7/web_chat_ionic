import { Injectable } from '@angular/core';
import { ResponseApi } from 'src/app/models/response-api.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { ApiService } from 'src/app/services/ApiService/api.service';
import { UserNgrxService } from 'src/app/services/ngrx/user-ngrx.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService, private userRedux: UserNgrxService) {
    this.api.setUrl('http://127.0.0.1:5000');
  }

  public saveUser(data: UserInformations): Promise<ResponseApi<{ id: number }>> {
    return new Promise((resolve, reject) => {
      this.api.postMethod<UserInformations>('/user', data).subscribe({
        next: (value: ResponseApi<{ id: number }>) => {

          this.userRedux.setUser({
            ...data,
            numero: value.data.id
          });
          
          resolve(value)
        },
        error: (error: any) => {
          reject(error)
          console.log(error)
        }
      })
    })
  }

  public getUser(id_user: number): Promise<ResponseApi<UserInformations>> {
    return new Promise((resolve, reject) => {
      this.api.getMethod<ResponseApi<UserInformations>>(`/user/${id_user}`).subscribe({
        next: (value) => {
          resolve(value)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

  public getAllUsers(): Promise<ResponseApi<UserInformations[]>> {
    return new Promise((resolve, reject) => {
      this.api.getMethod<ResponseApi<UserInformations[]>>('/users').subscribe({
        next: (value) => {
          resolve(value)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

}
