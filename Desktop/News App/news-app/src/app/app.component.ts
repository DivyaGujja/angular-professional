import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'news-app';
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService){
    console.log('app component constructor called');
  }

  ngOnInit() {
    console.log('inside ngOnInit in app.component.ts');
    //initial article load
    this.newsapi.initArticles().subscribe(data => {
      this.mArticles = data['articles']
    });
    //initial resource load
    this.newsapi.initSources().subscribe(data => {
      this.mSources = data['sources']
    });
  }

  searchArticles(source: string){
    console.log('source selected is'+source)
    this.newsapi.getArticleById(source).subscribe(data => {
      this.mArticles = data['articles'];
      console.log(this.mArticles);
    })
  }
}
