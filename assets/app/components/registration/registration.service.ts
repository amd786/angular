import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Registration } from './registration';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {

	private usersGet = '/user';
	private usersCreate = '/user/create';
	private users ;
	
	constructor(private http: Http) { }
  
	addUser(newUser) {
	
		return this.http.get(this.usersCreate+ "?name="+newUser.uname+"&email="+newUser.email)map((res:Response) => res.json());
	}
  
	  private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	  }
  
	private handleError(error: any) {
		console.error('An error occurred', error);
	}
	
}

export class RegistrationService2 {

	private usersGet = '/user';
	private usersCreate = '/user/create';
	private users ;
	
	constructor(private http: Http) { }
  
	addUser(newUser) {
	
		return this.http.get(this.usersCreate+ "?name="+newUser.uname+"&email="+newUser.email)map((res:Response) => res.json());
	}
  
	  private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	  }
  
	private handleError(error: any) {
		console.error('An error occurred', error);
	}
	
}