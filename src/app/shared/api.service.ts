import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService 
{
  [x: string]: any;
  
  addRestaurent(restaurentModelObj: RestaurentData) 
  {
    throw new Error('Method not implemented.');  //add logic
  }

  constructor(private _http: HttpClient) { }

  private baseUrl = "https://restaueant-json-server.vercel.app/";  // ✅ Use deployed JSON server

  // //POST request
  // postRestaurent(data:any ) 
  // {
  //   return this._http.post<any>("/api/posts", data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // //GET request
  // getRestaurent() 
  // {
  //   return this._http.get<any>("/api/posts").pipe(map((res:any)=>{
  //     return res;
  //   }));
  // }

  // //delete request
  // deleteRestaurant(id:number) 
  // {
  //   return this._http.delete<any>("/api/posts"+id).pipe(map((res:any)=>{
  //     return res;
  //   }));
  // }

  // //update request
  // updateRestaurant(id: number, data: any) 
  // {
  //   return this._http.put<any>("/api/posts"+id,data).pipe(map((res:any)=>{
  //     return res;
  //   }));
  // }

  // getRestaurentById(id: number) {
  //   return this._http.get<any>("/api/posts" + id).pipe(map((res: any) => {
  //     return {
  //       id: res.id,
  //       name: res.name,
  //       address: res.address,
  //       email: res.email,
  //       mobile: res.mobile,
  //       backgroundImage: res.backgroundImage,
  //       services: res.services,
  //       menu: res.menu,              // New field for menu (array of items with prices)
  //       customersVisited: res.customersVisited,  // New field for customers visited
  //       monthlyRevenue: res.monthlyRevenue       // New field for monthly revenue
  //     };
  //   }));
  // }

  // ✅ POST request - Add a new restaurant
  postRestaurent(data: any) {
    return this._http.post<any>(this.baseUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // ✅ GET request - Fetch all restaurants
  getRestaurent() {
    return this._http.get<any>(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // ✅ DELETE request - Delete a restaurant by ID
  deleteRestaurant(id: number) {
    return this._http.delete<any>(`${this.baseUrl}/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // ✅ PUT request - Update restaurant details by ID
  updateRestaurant(id: number, data: any) {
    return this._http.put<any>(`${this.baseUrl}/${id}`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // ✅ GET request - Fetch a restaurant by ID
  getRestaurentById(id: number) {
    return this._http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map((res: any) => {
        return {
          id: res.id,
          name: res.name,
          address: res.address,
          email: res.email,
          mobile: res.mobile,
          backgroundImage: res.backgroundImage,
          services: res.services,
          menu: res.menu, // Array of menu items with prices
          customersVisited: res.customersVisited, // Total customers visited
          monthlyRevenue: res.monthlyRevenue // Monthly revenue details
        };
      })
    );
  }
}
