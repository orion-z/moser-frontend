import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  private url = 'http://localhost:3000/product'

  constructor(private httpClient: HttpClient) { }

  public getEndpoints() {
    let data = this.httpClient.get(this.url)
    return data;
  }

}
