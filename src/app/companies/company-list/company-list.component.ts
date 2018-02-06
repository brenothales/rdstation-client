import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/company.service';
import { MzToastService} from 'ng2-materialize';

import { Company } from '../../shared/company.model';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  private companies: Company[] = [];

  constructor(private companyService: CompanyService, private toastService: MzToastService) { }


  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      for (const company of data){
        this.companies.push(new Company(company));
      }
    });
  }

  deleteCompany(company): boolean {
    if (confirm('Your want delete this company?')) {
        this.companyService.destroyCompany(company.id).subscribe(data => {
        const index = this.companies.indexOf(company);
        this.companies.splice(index, 1);
        this.toastService.show('Company deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error in delete Company ' + company.title, 8000, 'red');
      });
    }
    return false;
  }
}