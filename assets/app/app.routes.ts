import { provideRouter, RouterConfig }  from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { DealComponent } from './components/deal/deal.component';

const routes: RouterConfig = [
	{
		path: '',
		component: RegistrationComponent
	},
	{
		path: 'deal',
		component: DealComponent
	}
];

export const appRouterProviders = [
  provideRouter(routes)
];