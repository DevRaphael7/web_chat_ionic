import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) {
    this.api.setUrl('http://127.0.0.1:5000');
  }
}
