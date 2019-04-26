import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  homens: string;
  mulheres: string;
  criancas: string;

  ngOnInit() {
    $('input').mask('0#');
  }

}