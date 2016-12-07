import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <i *ngIf="isVisible" class="fa fa-spinner fa-spin fa-4x"></i>   
    `,
})
export class LoadingComponent {
    @Input() isVisible = true;
}