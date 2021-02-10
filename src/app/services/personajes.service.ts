import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api';
  
  }


  getAll(pPage = 1): Promise<any> {

    return this.http.get<any>(`${this.baseUrl}/character?page=${pPage}`).toPromise();

  }





}
