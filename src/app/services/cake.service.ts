import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cake } from '../model/cake.model';
import { Message } from '../model/message.model';
import { Slide } from '../model/slide';
import { User } from '../model/user.model';

const baseURL = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http: HttpClient) { }

  getCakes(params?:any): Observable<Cake[]> {
    let queryParams = {}
    
    if (params) {
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "asc")
        .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(`${baseURL}/cakes`, queryParams).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Cake(elem)) || []
    }))
  }

  getOne(cakeId: number): Observable<Cake> {
    return this.http.get(`${baseURL}/cakes/${cakeId}`).pipe(map((data: any) => {
      return new Cake(data);
    }))
  }

  getIngredients(): Observable<string[]> {
    return this.http.get(`${baseURL}/ingredients`).pipe(map((data: any) => {
      return data as Array<string>;
    }))
  }

  getUser(): Observable<User> {
    return this.http.get(`${baseURL}/user`).pipe(map((data: any) => {
      return new User(data[0]);
    }))
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`${baseURL}/user/${user._id}`, user).pipe(map((data: any) => {
      return new User(data);
    }))
  }

  postMessage(message: Message): Observable<Message> {
    return this.http.post(`${baseURL}/messages`, message).pipe(map((data: any) => {
      return new Message(data);
    }))
  }

  getSlideShow(): Observable<Slide[]> {
    return this.http.get(`${baseURL}/slideshow`).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Slide(elem)) || [];
    }))

  }
}
