import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  serverData: any='';

  constructor(private searchservice:SearchService) { 
    this.searchservice.dataUpdated.subscribe(
      (searchdata:any) => {
        this.serverData=searchdata;
      }
    );
  }

  ngOnInit() {
  }

}
