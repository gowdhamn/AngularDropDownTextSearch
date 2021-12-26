import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputArray: any = [
    {
      key: "1",
      value: "One"
    },
    {
      key: "2",
      value: "Two"
    },
    {
      key: "3",
      value: "Three"
    },
    {
      key: "4",
      value: "Four"
    },
    {
      key: "5",
      value: "Five"
    },
    {
      key: "6",
      value: "Six"
    },
    {
      key: "7",
      value: "Seven"
    },
    {
      key: "8",
      value: "Eight"
    },
    {
      key: "9",
      value: "Nine"
    },{
      key: "10",
      value: "Ten"
    }
  ];

  fcSearch = new FormControl();
 
  constructor(){}

}
