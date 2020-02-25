import { Component, OnInit } from '@angular/core';
import { AppServiceService} from './app-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private appService: AppServiceService){}
  title = 'loginservice';
  displaymsg: string;

  displayfun(){
    this.displaymsg = this.appService.displayText();
  }

  ngOnInit() {}
}

