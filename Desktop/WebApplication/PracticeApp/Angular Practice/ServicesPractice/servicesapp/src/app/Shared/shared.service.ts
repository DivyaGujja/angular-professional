import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getProjectName() {
    return 'Angular Service Project';
  }
}
