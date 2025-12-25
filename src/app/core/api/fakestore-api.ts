import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakestoreApi {
   constructor(private http:HttpClient){

   }

   private url = "https://fakestoreapi.com//products/";

   allCategory():Observable<string[]>{
    return this.http.get<string[]>(this.url+'categories');
   }

   
baseOnCategory(data:any):Observable<string[]>{
  return this.http.get<string[]>(this.url+'category/'+data);
}

pDetais(id:number):Observable<string[]>{
   return this.http.get<string[]>(this.url+id)
}
   
}
