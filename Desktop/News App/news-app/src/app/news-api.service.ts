import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'ea54cf4b4280497180f43c160fb33aff';

  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticleById(source: string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
