import {Component, Directive,  OnInit} from '@angular/core';
import {Details} from '../details';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  details: Details = {
    dname: 'Harshini',
    age: 24
};

  customerList = [{name: 'Harshini', city: 'Harrison', state: 'NJ'},
                  {name: 'Manu', city: 'NYC', state: 'NY'},
                  {name: 'Apsara', city: 'Kearny', state: 'NJ'}];

  attrName = '';

  constructor() { }

  ngOnInit(): void {
  }
  myClickFunction(event): undefined {
    alert('Button is clicked');
    console.log(event);
    return;
  }
}

