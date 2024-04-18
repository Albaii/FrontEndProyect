import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterI } from '../../models/register.interface';
import { ResponseI } from '../../models/response.interface';
import { LoginI } from '../../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlLogin = 'http://localhost:8081/auth/login';
  private urlRegister = 'http://localhost:8081/auth/register';
  
  constructor(private http: HttpClient) {
  }
 
  Register(form:RegisterI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.urlRegister, form);
  }

  Login(form:LoginI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.urlLogin, form);
  }
}
