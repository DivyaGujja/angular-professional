import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class alertComponent {
    @Input() message: string;
    @Output() closeAlert = new EventEmitter<void>();

    onClose() {
        this.closeAlert.emit();
    }
}