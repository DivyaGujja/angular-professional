import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  action: string = '';
  selectedUser: User;
  userListChanged = new Subject<User[]> ();

  constructor(private httpClientService: HttpClientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.users = new Array<User>();
    this.action = '';

    const user1 = new User();
    user1.id = 1;
    user1.name = 'user1';
    user1.type = 'admin';
    user1.password = 'pass';

    const user2 = new User();
    user2.id = 2;
    user2.name = 'user2';
    user2.type = 'user';
    user2.password = 'pass';

    this.users.push(user1);
    this.users.push(user2);

    //THIS CODE IS USED AFTER FIREBASE BACKEND IS SETUP

    this.httpClientService.putUsers(this.users).subscribe(response=> {});
    this.userListChanged.next(this.users.slice());

    this.httpClientService.getUsers().subscribe(response => {this.users = response;
                                                             this.userListChanged.next(this.users.slice());});
    this.activatedRoute.queryParams.subscribe(params => {this.action=params['action']});

    //this.refreshData();
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin','users'],{queryParams:{action:'add'}});
    //this.action = 'add';
  }

  refreshData(newUser:User) {
    console.log(newUser);
    this.users.push(newUser);
    this.httpClientService.putUsers(this.users).subscribe(response=> {});
    this.httpClientService.getUsers().subscribe(response => {this.users = response;
                                                             this.userListChanged.next(this.users.slice());});
    //this.activatedRoute.queryParams.subscribe(params => {this.action=params['action']});
  }

}
