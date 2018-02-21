import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orderscomponent/orders.component';
import { CreateneworderComponent} from './createnewordercomponent/createneworder.component';

const routes: Routes = [
  { path: 'forgot', loadChildren: './auth/forgot/forgot.module#ForgotModule' },
  { path: 'reset', loadChildren: './auth/reset/reset.module#ResetModule' },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders',  component: OrdersComponent },
  { path: 'createorder',  component: CreateneworderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


