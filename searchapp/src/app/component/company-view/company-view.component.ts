import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {
   id: any;
   result: any;
   details : any;
   selectedCompany : any;
   officers : boolean = false;
  constructor(private route: Router,private data: DataService) { }

  ngOnInit(): void {
    this.selectedCompany = history.state.data
    console.log("item", this.selectedCompany)
  }

  getOfficers(id : any){
    let response =  this.data.getOfficers(id).subscribe(data =>
      {

        this.result = data
     
        this.details = this.result['items']
        console.log(this.details)
      })
    this.officers = true
  }
}
