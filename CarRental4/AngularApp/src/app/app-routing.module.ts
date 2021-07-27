import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RentalsComponent } from './rentals/rentals.component';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ManageCarsComponent } from './Premission1+/manage-cars/manage-cars.component';
import { ManageReturnsComponent } from './Premission1+/manage-returns/manage-returns.component';
import { ManageUsersComponent } from './Premission1+/manage-users/manage-users.component';
import { ManageCarTypesComponent } from './Premission1+/manage-car-types/manage-car-types.component';
import { ViewRentalsComponent } from './Premission1+/view-rentals/view-rentals.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: 'search', component: SearchCarsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent },

  { path: 'manageCars', component: ManageCarsComponent }, 
  { path: 'manageCarTypes', component: ManageCarTypesComponent },
  { path: 'viewRentals', component: ViewRentalsComponent },
  { path: 'manageReturns', component: ManageReturnsComponent },
  { path: 'manageUsers', component: ManageUsersComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
