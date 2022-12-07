import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-companies',
  templateUrl: './display-companies.component.html',
  styleUrls: ['./display-companies.component.scss']
})
export class DisplayCompaniesComponent implements OnInit {
  @Input() item : any={};
  constructor(private data:DataService,private route:ActivatedRoute) { }
  search : any;
  companies : any;
  showError:any;
 p : any;
  errMSg : any;
  res : any;
  ngOnInit(): void {

  this.route.queryParams.subscribe(params => {
        console.log(params); 
        this.search = params.searchTerm;
        console.log(this.search); 
      })

  let response =  this.data.getCompanies(this.search).subscribe(data =>
        {
          this.res = data
          this.companies = this.res['items']
          
          console.log("companies", this.companies)

          if(this.companies === undefined){
            this.showError = true
          }
         
        })
     
     
    
  }

}
