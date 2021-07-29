import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';

import {
  MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSidenavModule, MatListModule, MatSortModule,
  MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatGridListModule, MatMenuModule, MatSlideToggleModule, MatProgressSpinnerModule, MatPaginatorModule,
  MatDialogModule,
  MAT_DATE_LOCALE,
} from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import { RentalsComponent } from './rentals/rentals.component';

import { CarDataService } from './services/car-data.service';
import { UserDataService } from './services/user-data.service';
import { RentalDataService } from './services/rental-data.service';
import { BranchDataService } from './services/branch-data.service';

import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { CarErrorHandler } from './error-handler';
import { MessageComponent } from './message/message.component';
import { ManageCarsComponent } from './Premission1+/manage-cars/manage-cars.component';
import { ManageReturnsComponent, } from './Premission1+/manage-returns/manage-returns.component';
import { ManageUsersComponent } from './Premission1+/manage-users/manage-users.component';
import { ManageCarTypesComponent } from './Premission1+/manage-car-types/manage-car-types.component';
import { carsModal } from './Premission1+/manage-cars/carsModal';
import { userModal } from './Premission1+/manage-users/userModal';
import { returnsModal } from './Premission1+/manage-returns/returnsModal';
import { carTypeModal } from './Premission1+/manage-car-types/carTypeModal';
import { ViewRentalsComponent } from './Premission1+/view-rentals/view-rentals.component';
import { FooterCardsComponent } from './footer-cards/footer-cards.component';
import { BasicAuthInterceptor } from './authorization/basic-auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { permissionPipe } from './services/pipes';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchCarsComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RentalsComponent,
    RegisterComponent,
    CheckoutComponent,
    ManageCarsComponent,
    MessageComponent,
    ManageReturnsComponent,
    returnsModal, carsModal, userModal, carTypeModal,
    ManageUsersComponent,
    ManageCarTypesComponent,
    ViewRentalsComponent,
    FooterCardsComponent,
    FooterComponent,
    permissionPipe,
  ],
  imports: [
       // FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule,
    AngularFontAwesomeModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    
  ],
  exports: [permissionPipe],
  providers: [CarDataService, UserDataService, RentalDataService, BranchDataService, permissionPipe,
    { provide: ErrorHandler, useClass: CarErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  entryComponents: [returnsModal, carsModal, userModal, carTypeModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
