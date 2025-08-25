import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Policiais{
  id?: number,
  rg_civil: string,
  rg_militar: string,
  cpf: string,
  data_nascimento: string,
  matricula: string
}

@Injectable({
  providedIn: 'root'
})
export class PoliciaisService {
  private api = 'http://localhost:3016'

  constructor(private http: HttpClient) { }

  getPoliciais():Observable<Policiais[]>{
    return this.http.get<Policiais[]>(this.api)
  }

  createPoliciais(policiais: Policiais):Observable<any> {
    return this.http.post(this.api, policiais);
  }
}
