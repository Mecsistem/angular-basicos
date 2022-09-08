import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h5>La base es <strong>{{base}}</strong></h5>
    
    <button (click)="acumular(base);">+ {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-1 * base);">- {{base}}</button>
    `
})

export class ContadorComponent{
    title : string = 'Contador App';
    numero : number = 10;
    base : number=5;
  
    acumular(valor:number){
      this.numero +=valor;
    }
}