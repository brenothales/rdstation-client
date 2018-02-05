import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';


import { Angular2TokenService } from 'angular2-token';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';



const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'companies', component: CompanyListComponent, canActivate: [Angular2TokenService]},
    { path: 'companies/:id', component: CompanyEditComponent, canActivate: [Angular2TokenService]},
    { path: 'companies/new', component: CompanyEditComponent, canActivate: [Angular2TokenService]},
    { path: '**', component: NotFoundComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);