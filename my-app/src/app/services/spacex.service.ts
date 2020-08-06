import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private _http: HttpClient) { }

  get(){
    return this._http.get('https://api.spacexdata.com/v3/launches?limit=50');
  }
  getByYear(year){
    console.log(year)
    return this._http.get(`https://api.spacexdata.com/v3/launches?limit=2&amp;launch_success=true&amp;land_success=true&amp;launch_year=${year}`)
  }
}
