import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from 'protractor';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  searchText: string ='';
  
  constructor(private searchservice:SearchService) { 
    
  };

  onSearch() {
    console.log('inside onSearch method');
    this.searchservice.search(this.searchText);
  }

    
  ngOnInit() {
  }

  
}
