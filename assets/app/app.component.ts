import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationService } from './components/registration/registration.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>    
	<router-outlet></router-outlet>
  `,
	directives: [RegistrationComponent, ROUTER_DIRECTIVES],
	providers: [
		RegistrationService,
	]
})
export class AppComponent { 
		
	title = "Registration";
	
}