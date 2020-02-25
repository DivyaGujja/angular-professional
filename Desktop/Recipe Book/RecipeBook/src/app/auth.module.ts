import { NgModule } from '@angular/core';
import { AuthComponent } from './Auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { alertComponent } from './Shared/alert/alert.component';
import { loadingSpinnerComponent } from './Shared/loading-spinner.component';
import { sharedModule } from './Shared/shared.module';

@NgModule({
    declarations: [
        AuthComponent],
    imports: [
        CommonModule, 
        FormsModule, 
        RouterModule.forChild([{path: '', component: AuthComponent},]),
        sharedModule
    ],
    //exports: [AuthComponent,alertComponent,loadingSpinnerComponent]
})
export class authModule {

}