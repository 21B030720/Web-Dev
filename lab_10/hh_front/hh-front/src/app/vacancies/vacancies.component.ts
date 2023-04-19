import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Company, Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private companyService: CompanyService){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.companyService.getCompanyVacancies(id).subscribe( data=>{
        this.vacancies = data;
      })
    } )

  }
  
  
}
