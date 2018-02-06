import { Component, OnInit, Input} from '@angular/core';

import { CompanyService } from '../../shared/company.service';
import { Company } from '../../shared/company.model';
import { MzToastService} from 'ng2-materialize';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  @Input() company: Company;

  constructor(
              private companyService: CompanyService,
              private toastService: MzToastService,
              private router: Router
              ) { }

  ngOnInit() { }

  onSubmit(f) {
    if (this.company.id) {
      this.companyService.updateCompany(this.company.id, this.company).subscribe(data => {
        this.toastService.show('Company updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem in Company creation', 8000, 'red');
      });
    } else {
      this.companyService.createCompany(this.company).subscribe(data => {
        this.router.navigate(['/companies/' + data.slug]);
      }, error => {
        this.toastService.show('Problem in Company creation', 8000, 'red');
      });
    }
  }
}