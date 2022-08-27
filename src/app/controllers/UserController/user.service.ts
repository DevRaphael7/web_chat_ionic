import { Injectable } from '@angular/core';
import { ResponseApi } from 'src/app/models/response-api.model';
import { UserInformations } from 'src/app/models/user-informations.model';
import { ApiService } from 'src/app/services/ApiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) {
    this.api.setUrl('http://127.0.0.1:5000');
  }

  public saveUser(data: UserInformations): Promise<ResponseApi<null>> {
    return new Promise((resolve, reject) => {
      this.api.postMethod<UserInformations>('/user', data).subscribe({
        next: (value: ResponseApi<null>) => {
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
