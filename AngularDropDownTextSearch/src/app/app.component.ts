import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  countries: any = [
    {
      key: "Great Britain",
      value: "GB"
    },
    {
      key: "United States",
      value: "US"
    },
    {
      key: "Canada",
      value: "CA"
    }
  ];

  fcMaterial = new FormControl();
 
  constructor(){}

}
