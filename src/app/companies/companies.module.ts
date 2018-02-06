import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { ActiveComponent } from './shared/active/active.component';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routing } from './../app.routing';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { CompanyFormComponent } from './company-form/company-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';




@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    routing,
    CoreFormsModule,
    ColorPickerModule
  ],
  exports: [
    CompanyListComponent
  ],
  declarations: [
      CompanyListComponent,
      CompanyEditComponent,
      ActiveComponent,
      CompanyFormComponent,
      ProductListComponent,
      ProductFormComponent,
      SubscriberListComponent,
      SubscriberFormComponent]
})
export class CompaniesModule { }