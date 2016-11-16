import { AuthGuard } from './shared/authgaurd.component';
import { UserService } from './users/user.service';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [UserService, AuthGuard]
})
export class AppComponent {

}