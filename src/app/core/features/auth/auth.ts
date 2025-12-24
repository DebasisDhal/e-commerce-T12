import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

private url="https://fakestoreapi.com/auth/login";

constructor(private http:HttpClient){}

onLogin(credential:any){
  console.log(credential,"onService")
    return this.http.post(this.url,credential);
}

  
}
