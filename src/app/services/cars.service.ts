import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class CarsService {
    
    constructor(private _apiService: ApiService, private readonly _httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this._apiService.get('shop/cars');
    }

    getCarByID(carID:number): Observable<any>{
        return this._apiService.getByID(carID, 'shop/cars');
    }

    deleteCar(carID: number): Observable<any>{
        return this._apiService.delete(carID, 'shop/cars');
    }
}
