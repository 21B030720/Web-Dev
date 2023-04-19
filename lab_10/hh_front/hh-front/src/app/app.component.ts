import { Component, OnInit } from '@angular/core';
import { Company } from './models';
import { CompanyService } from './company.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';
  companies: Company[] = [];
  newName: string = '';
  newDescription: string = '';
  newCity: string = '';
  newAddress: string = '';
  constructor(private companyService: CompanyService){
    // this.companyService.getCompanies().subscribe( data=>{
    //   // console.log(data);
    //   this.companies = data;
    // })
  }
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe( data=>{
      // console.log(data);
      this.companies = data;
    })
    // this.companies.push(
    //   {
    //     id: 1,
    //     name:'Romi',
    //     description: 'Toi',
    //     city: 'Karaganda',
    //     address: 'Dont care'
    //   }
    // )

  }
  addCompany(){
    // console.log(this.newName);
    this.companyService.createCompany(this.newName, this.newDescription, this.newCity, this.newAddress).subscribe((data) => {
      // console.log(data);
      this.companies.push(data);
      this.newName = '';
      this.newDescription = '';
      this.newCity = '';
      this.newAddress = '';
    });
  }
  deleteCompany(compId: number){
    this.companyService.daleteCompany(compId).subscribe((data) => {
      // console.log(data);
      this.companies = this.companies.filter((company) => company.id !== compId);
    });
  }

}
