import { Component, OnInit } from '@angular/core';
import {Details} from '../details';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  details: Details = {
    name: 'Harshini',
    age: 24
};
  constructor() { }

  ngOnInit(): void {
  }
  myClickFunction(event): undefined {
    alert('Button is clicked');
    console.log(event);
    return;
  }
}

