import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../../../shared/company.service';
import { MzToastService} from 'ng2-materialize';
import { Company } from '../../../shared/company.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  @Input() company: Company;

  constructor(private companyService: CompanyService, private toastService: MzToastService) { }

  ngOnInit() {
  }

  toggleEnable() {
    this.companyService.updateCompany(this.company.id, this.company).subscribe(data => {
      if (this.company.enable) {
        this.toastService.show('Company enabled', 8000, 'green');
      } else {
        this.toastService.show('Company disabled', 8000, 'green');
      }
    }, error => {
      if (this.company.enable) {
        this.toastService.show('Error in enable Company', 8000, 'red');
      } else {
        this.toastService.show('Error in disable Company', 8000, 'red');
      }
    });
  }
}
