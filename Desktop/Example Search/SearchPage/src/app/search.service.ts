import { Injectable, EventEmitter } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string = "api-service";
  serverData: any;
  dataUpdated = new EventEmitter<any> ();

  constructor(private http: HttpClient) { }

  public search(searchText:string){
    this.http.get(this.url,{params: new HttpParams().set('code',searchText).set('type','topSearch')})
    .subscribe((data: Config) => {
      this.serverData = data.aaData;
      this.dataUpdated.emit(this.serverData);
      console.log('Inside service and serverData:' +this.serverData);
      console.log(searchText);
    });
  }
}
