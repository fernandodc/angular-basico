import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ContadorComponent {
  title: string = 'bases';
  numero: number = 193;
  base: number = 5;
  acumular(valor: number) {
    this.numero = this.numero + valor;
  }
}
