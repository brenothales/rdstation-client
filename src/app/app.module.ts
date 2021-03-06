import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterializeModule } from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { CompaniesModule } from './companies/companies.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { UsersModule } from './users/users.module';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

import { CompanyService } from './shared/company.service';
import { ProductService } from './shared/product.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
    CompaniesModule,
    RouterModule,
    UsersModule,
    routing
  ],
  providers: [Angular2TokenService, CompanyService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
