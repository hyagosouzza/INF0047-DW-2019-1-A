import { Component, OnInit, DoCheck } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  altura: string = '';
  peso: string = '';
  imc: number;
  arrayInfo = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2"
    , "Obesidade grau 3"];
  info: string = '';
  style: string = '';

  ngOnInit() {
    $('#altura').mask('0,00');
    $('#peso').mask('000,00');
  }

  ngDoCheck() {
    let peso = Number.parseFloat(this.peso.replace(",", "."));
    let altura = Number.parseFloat(this.altura.replace(",", "."));

    this.imc = Number.parseFloat((peso / (altura * altura)).toFixed(2));

    if (this.imc < 18.5) {
      this.info = this.arrayInfo[0];
      this.style = 'orangered';
    } else if (this.imc >= 18.5 && this.imc <= 24.9) {
      this.info = this.arrayInfo[1];
      this.style = 'forestgreen';
    } else if (this.imc >= 25 && this.imc <= 29.9) {
      this.info = this.arrayInfo[2];
      this.style = 'orangered';
    } else if (this.imc >= 30 && this.imc <= 34.9) {
      this.info = this.arrayInfo[3];
      this.style = 'crimson';
    } else if (this.imc >= 35 && this.imc <= 39.9) {
      this.info = this.arrayInfo[4];
      this.style = 'crimson';
    } else if (this.imc >= 40){
      this.info = this.arrayInfo[5];
      this.style = 'crimson';
    } else {
      this.info = '';
    }
  }

  infoStyle() {
    return this.style;
  }
}
