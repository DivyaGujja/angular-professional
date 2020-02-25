import { Component, OnInit } from '@angular/core';
import { authService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RecipeBook';

  constructor(private authservice: authService) {}

  ngOnInit() {
    this.authservice.autoLogin();
  }
 
}
