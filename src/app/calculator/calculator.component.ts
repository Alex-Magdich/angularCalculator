import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    value1: number;
    value2: number;
    result: number;

  constructor() { }

  ngOnInit() {

  }

  summa(){
      this.result = this.value1 + this.value2;
  }
  minus(){
      this.result = this.value1 - this.value2;
  }
  divide(){
      this.result = this.value1 / this.value2;
  }
  multiply(){
      this.result = this.value1 * this.value2;
  }

}
