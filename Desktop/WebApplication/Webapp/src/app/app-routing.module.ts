import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CustsuptComponent } from './custsupt/custsupt.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'custsupt', component: CustsuptComponent},
  {path: 'contact', component:ContactComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
