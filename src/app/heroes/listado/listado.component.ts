import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Albersoman', 'Fabiola', 'Super massita', 'la bipolar'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando....');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
