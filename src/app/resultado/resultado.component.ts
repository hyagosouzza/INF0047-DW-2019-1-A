import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit, DoCheck {

  @Input() homens: string;
  @Input() mulheres: string;
  @Input() criancas: string;

  bovinosIndex: Array<boolean> = new Array();
  linguicasIndex: Array<boolean> = new Array();
  frangosIndex: Array<boolean> = new Array();
  bebidasIndex: Array<boolean> = new Array();

  bovinos = ["Alcatra", "Carne de Sol", "Contra Filé", "Fraldinha", "Maminha", "Picanha", "Pernil de Cordeiro"];

  linguicas = ["Linguiça de Frango", "Linguiça Toscana"];

  frangos = ["Coração de Frango", "Asinha de Frango", "Coxa de Frango"];

  bebidas = ["Cerveja", "Refrigerante", "Suco"];

  kgHomem = 0.6;
  kgMulher = 0.4;
  kgCrianca = 0.2;

  resultadoCarnes: any = 0;
  resultadoBebidas: Array<number> = [0, 0, 0];

  constructor() { }

  ngOnInit() {
  }

  verificaPessoas() {
    if (this.mulheres == undefined || this.mulheres == '') {
      this.mulheres = "0";
    }
    if (this.homens == undefined || this.homens == '') {
      this.homens = "0";
    }
    if (this.criancas == undefined || this.criancas == '') {
      this.criancas = "0";
    }
  }

  resetPessoas() {
    if (this.mulheres == "0") {
      this.mulheres = "";
    }
    if (this.homens == "0") {
      this.homens = "";
    }
    if (this.criancas == "0") {
      this.criancas = "";
    }
  }

  ngDoCheck() {
    this.verificaPessoas();

    this.resultadoBebidas = [parseInt(this.homens), parseInt(this.mulheres), parseInt(this.criancas)];
    this.resultadoBebidas[0] = (parseInt(this.homens) + parseInt(this.mulheres)) * 2;
    this.resultadoBebidas[1] = (parseInt(this.homens) + parseInt(this.mulheres) + parseInt(this.criancas));
    this.resultadoBebidas[2] = (parseInt(this.homens) + parseInt(this.mulheres) + parseInt(this.criancas));

    let somaKg = (parseInt(this.criancas) * this.kgCrianca) + (parseInt(this.homens) * this.kgHomem) +
      (parseInt(this.mulheres) * this.kgMulher);
    let numCarnes = 0;
    this.bovinosIndex.forEach(element => {
      if (element) numCarnes++;
    });
    this.frangosIndex.forEach(element => {
      if (element) numCarnes++;
    });
    this.linguicasIndex.forEach(element => {
      if (element) numCarnes++;
    });
    
    this.resultadoCarnes = (somaKg / numCarnes).toFixed(2);
    console.log(somaKg, numCarnes);
    
    this.resetPessoas();
  }

}
