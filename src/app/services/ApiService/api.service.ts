import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string;

  constructor(private http: HttpClient) {}

  public setUrl(url: string) {
    this.url = url;
  }

  public getMethod(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }

  public postMethod<T>(endpoint: string, json: T){
    return this.http.post(this.url + endpoint, {}, json);
  }

}
