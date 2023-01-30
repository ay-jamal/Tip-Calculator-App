import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css'],
})
export class TipComponent implements OnInit {
  bill: any;
  total: number | undefined = 0;
  tip: number | undefined = 0;
  tips: number[] = [5, 10, 15, 25, 50];

  pepole!: number | string;
  pres!: number;
  mony!: number;
  constructor() {}

  ngOnInit(): void {}

  calcTip(billInput: any) {
    console.log(Number(billInput));
    this.mony = Number(billInput);
  }

  calcpres(tip: number) {
    this.pres = tip;
    console.log(this.pres);
    this.calcTotal(this.mony, this.pres);
  }

  calcPepole(pepoleInput: any) {
    this.pepole = Number(pepoleInput);
    console.log(this.pepole);
    this.calcpersonTip(this.mony, this.pres, this.pepole);
  }

  calcTotal(bill: any, prec: any) {
    console.log('hi', (prec / 100) * bill);
    this.total = (prec / 100) * bill + bill!;
    console.log(this.total);
  }

  calcpersonTip(bill: number, prec: number, pepole: number) {
    const total = Number(Math.round(bill * prec) / pepole);
    const precTip = (total * 100) / 100;
    this.tip = Number(precTip.toFixed(2));
    this.tip = Number(this.tip.toFixed(3).slice(0, 2));
  }

  clearAllValues() {
    this.total = 0.0;
    this.tip = 0.0;
    this.bill = '';
    this.pepole = '';
  }
}
