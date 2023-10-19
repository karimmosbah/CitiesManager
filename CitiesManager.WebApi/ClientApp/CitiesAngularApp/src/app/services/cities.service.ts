import { Injectable } from '@angular/core';
import { City } from "../models/city";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const API_USE_URL: string = "https://localhost:7234/api";
@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  cities: City[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public getCities(): Observable<City[]> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer mytoken");
    return this.httpClient.get<City[]>(`${API_USE_URL}/cities`, {headers : headers});
  }

  public postCity(city: City): Observable<City> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer mytoken");
    return this.httpClient.post<City>(`${API_USE_URL}/cities`,city, { headers: headers });
  }

  public putCity(city: City): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer mytoken");
    return this.httpClient.put<string>(`${API_USE_URL}/cities/${city.cityID}`, city, { headers: headers });
  }

  public deleteCity(cityID: string | null): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Bearer mytoken");
    return this.httpClient.delete<string>(`${API_USE_URL}/cities/${cityID}`, { headers: headers });
  }
}
