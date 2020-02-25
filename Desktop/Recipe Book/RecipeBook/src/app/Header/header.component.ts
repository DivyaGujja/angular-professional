import { Component, OnInit, OnDestroy } from '@angular/core';
import { datastorageService } from '../services/datastorage.service';
import { authService } from '../Auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;
  
  constructor(private datastorageService: datastorageService,
              private authservice: authService) { }

  ngOnInit() {
    this.userSub = this.authservice.user.subscribe(
      user => { this.isAuthenticated = !!user;
                console.log(!user);
                console.log(!!user);
              }
    );
  }

  onSaveData() {
    this.datastorageService.storeRecipes();
  }

  onFetchData() {
    this.datastorageService.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authservice.logOut();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe;
  }

}
