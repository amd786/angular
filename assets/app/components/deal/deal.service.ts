import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Deal } from './deal';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealService {
  private getDeals = 'app/deal';
  private insertDeals = 'app/deal';
  
	constructor(private http: Http) { }

	addDeals(dealData) {
		alert(JSON.stringify(dealData));
		//return this.http.post(this.insertDeals, JSON.stringify(newUser));
	}
  
	private handleError(error: any) {
		console.error('An error occurred', error);
	}
}