import { Component ,OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Customer } from './shared/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private objhttpserv:Http)
  {  }
 
  
  title = 'CustomerList';
  //apiValues:string[]=[];
  list:Customer[];
  ourapiurl:string='https://localhost:44330/api/Customers';

  ngOnInit(): void {
    this.objhttpserv.get(this.ourapiurl).subscribe(values=>{this.list=values.json() as Customer[]; }
    );
  }

}
