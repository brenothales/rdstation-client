import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { ActiveComponent } from './shared/active/active.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
      CompanyListComponent
  ],
  declarations: [CompanyListComponent, CompanyEditComponent, ActiveComponent]
})
export class CompaniesModule { }
