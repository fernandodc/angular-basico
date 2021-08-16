import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['../../app.component.css'],
})
export class HeroeComponent {
  nombre: String = 'Ferman';
  edad: number = 51;
  get nombreCapializado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre} tiene ${this.edad}`;
  }

  cambiarNombre() {
    this.nombre = 'Spiderman';
  }
  cambiarEdad() {
    this.edad += 1;
  }
}
