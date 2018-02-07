import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../shared/company.service';
import { Company } from '../../shared/company.model';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
    public company: Company = new Company({primary_color: '#eee', enable: false});
  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.companyService.getCompany(params['id']).subscribe(data => {
          this.company = new Company(data);
        });
      }
    });
  }
}