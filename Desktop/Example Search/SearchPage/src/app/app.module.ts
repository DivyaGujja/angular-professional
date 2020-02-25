import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { SearchresultComponent } from './searchresult/searchresult.component';

const appRoutes: Routes = [{path:'', component: HomeComponent},
                           {path:'results', component: SearchresultComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    SearchresultComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
