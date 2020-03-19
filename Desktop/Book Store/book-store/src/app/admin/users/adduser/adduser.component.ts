import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input() user:User;
  @Output() userAddedEvent = new EventEmitter<User>();

  constructor(private httpClientService: HttpClientService,
              private router: Router) { }

  ngOnInit() {
  }

  //saveNewUser() {
  onSubmit() {
    //this.httpClientService.postUser(this.user).subscribe(user => {})
      this.userAddedEvent.emit(this.user);
      this.router.navigate(['admin','users']);
  }

}
