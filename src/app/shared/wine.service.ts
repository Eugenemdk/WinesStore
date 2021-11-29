import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Wine} from './wine.model'

@Injectable({
  providedIn: 'root'
})
export class WineService {
  selectedWine:Wine;
  wines:Wine[];
  constructor(public http: HttpClient) { }
  
  readonly baseURL = 'http://localhost:3000/wines';



  postWine(wine: Wine) {
    return this.http.post(this.baseURL, wine);
  }

  getWineList() {
    return this.http.get(this.baseURL);
  }

  putWine(wine: Wine) {
    return this.http.put(this.baseURL + `/${wine._id}`, wine);
  }

  deleteWine(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  
}
