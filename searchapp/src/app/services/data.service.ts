import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
   
  

  getCompanies(id: any) {
    // let headers = new HttpHeaders().set('x-api-key','on6xyVg1NH4h8YDPZL3vH3fnPH5kESh4MZLBL6N8').set('Content-type' ,'application/json')
    /**Setting the api-key header */
    let httpOptions ={
      headers  : new HttpHeaders().set(
        'x-api-key'  , 'on6xyVg1NH4h8YDPZL3vH3fnPH5kESh4MZLBL6N8'
      )
    }
    /**Query param - search */
    let params = new HttpParams();
        params = params.set("Query", id.toString())
  
        return this.http.get('/TruProxyAPI/rest/Companies/v1/Search',{params,headers: httpOptions.headers},);
           
          
      }


      getOfficers(id: any) {
        // let headers = new HttpHeaders().set('x-api-key','on6xyVg1NH4h8YDPZL3vH3fnPH5kESh4MZLBL6N8').set('Content-type' ,'application/json')
        /**Setting the api-key header */
        let httpOptions ={
          headers  : new HttpHeaders().set(
            'x-api-key'  , 'on6xyVg1NH4h8YDPZL3vH3fnPH5kESh4MZLBL6N8'
          )
        }
        /**Query param - search */
        let params = new HttpParams();
            params = params.set("CompanyNumber", id.toString())
      
            return this.http.get('/TruProxyAPI/rest/Companies/v1/Officers',{params,headers: httpOptions.headers},);
               
              
          }
}
