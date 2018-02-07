import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { Registration } from './registration';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';

@Component({
	selector: 'registration',
    templateUrl: "app/templates/registration.html",
	providers: [RegistrationService]
})
export class RegistrationComponent {
	user:Array<Object>; 
	
	constructor(fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {
		this.registration = new Registration();

		this.loginForm = fb.group({
		  email: [this.registration.email, Validators.required],
		  uname: [this.registration.uname, Validators.required]
		});
	}
	doLogin(event) {
		if (this.loginForm.dirty && this.loginForm.valid) {
			this.registrationService.addUser(this.loginForm.value).subscribe(
			  data => this.success(data._body),
			  err => this.logError(err),
			  function() { console.log("success") }
			);
		}
		event.preventDefault();
	}

	success(data){
		var a = JSON.parse(data);
		console.log(a.email);
		this.router.navigate(['deal']);
	}
	
}