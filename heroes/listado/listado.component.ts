import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]= ['Spiderman', 'Ironman', 'Batman','Hulk'];
  heroesBorrados: string[]= [];
  heroeBorrado : boolean=false;

  borrarHeroe(){
  let hb = this.heroes.shift()?.toString() || '';

  if (hb != undefined || hb != "")
  {
    this.heroeBorrado= true;
    this.heroesBorrados.push(hb);
  }
  
}

}
