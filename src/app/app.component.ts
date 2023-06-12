import { Component, OnInit } from '@angular/core';
import { EndpointsService } from './endpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newData:any;

  constructor(private endpointsService:EndpointsService) {}

  ngOnInit(){
    this.endpointsService.getEndpoints().subscribe(res => {
      this.newData = res;
      console.log('data = ' + this.newData);
    })
  }
}
