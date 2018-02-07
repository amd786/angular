import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { Deal } from './deal';
import { DealService } from './deal.service';
import { Router } from '@angular/router';

@Component({
	selector: 'deal-form',
    templateUrl: "app/templates/deal.html",
	providers: [DealService]
})
export class DealComponent {
	title = "Bidding";
	constructor(fb: FormBuilder, private dealService: DealService) {
		this.deal = new Deal();
	}
	
}