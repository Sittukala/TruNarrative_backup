import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, OnChanges {
  search : any;
  companies : any;
  disable : boolean = true;
  res : any;
  constructor(private data:DataService,private route: Router) { }

  ngOnInit(): void {

   

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes detected");
  }

  onInput(e: any){
    if(this.search !=null && this.search !== '' && this.search !== undefined && this.search.trimStart() !== ''){
    this.disable = false;
    }
  }
  change(e:any){
    if(this.disable){
      e.preventDefault()
    }
    else{
    if(this.search != null && this.search !== '' && this.search !== undefined){
    this.route.navigate(['/item'],{queryParams: {'searchTerm': this.search}})
    }
    else{
      console.log("undefined")
    }
  }
   
  }

}
