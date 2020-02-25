import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  Registered = false;
  User = {
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: null
  };

  onRegister(form:NgForm) {
    
    this.Registered = true;

    this.User.firstName = form.value.FirstName;
    this.User.lastName = form.value.LastName;
    this.User.email = form.value.Email;
    this.User.streetAddress = form.value.streetAddress;
    this.User.city = form.value.city;
    this.User.state = form.value.state;
    this.User.zipCode = form.value.zipCode;

    this.http.post('https://registration-form-9ebaf.firebaseio.com/users.json',this.User)
          .subscribe(responseData => {
            console.log(responseData)
          });
  }

}
