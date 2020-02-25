import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projectName: string;

  constructor(private sharedservice: SharedService) { }

  ngOnInit() {
    this.projectName = this.sharedservice.getProjectName();
  }

}
