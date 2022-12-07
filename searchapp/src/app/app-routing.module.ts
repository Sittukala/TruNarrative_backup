import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './component/companies/companies.component';
import { CompanyViewComponent } from './component/company-view/company-view.component';
import { DisplayCompaniesComponent } from './component/display-companies/display-companies.component';

const routes: Routes = [{ path: '', component: CompaniesComponent , },
{ path: 'item', component:  DisplayCompaniesComponent, },
{ path: 'companyView', component:  CompanyViewComponent, },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
