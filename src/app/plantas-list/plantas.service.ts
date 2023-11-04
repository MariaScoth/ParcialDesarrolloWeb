import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Plantas} from "./plantas"

@Injectable({
    providedIn: 'root'
  })
export class PlantasService {

    private apiUrl = environment.baseUrl

constructor(private http: HttpClient) { }




getPlantas(): Observable<Plantas[]>{
    return this.http.get<Plantas[]>(this.apiUrl);
    };


}
