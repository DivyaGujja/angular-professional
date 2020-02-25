import { NgModule } from '@angular/core';
import { alertComponent } from './alert/alert.component';
import { loadingSpinnerComponent } from './loading-spinner.component';
import { DropdownDirective } from '../Directives/dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        alertComponent,
        loadingSpinnerComponent,
        DropdownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        alertComponent,
        loadingSpinnerComponent,
        DropdownDirective
    ]
})
export class sharedModule {

}