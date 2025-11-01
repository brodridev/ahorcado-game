import { Component, input } from '@angular/core';

@Component({
  selector: 'app-muneco-ahorcado',
  imports: [],
  templateUrl: './muneco-ahorcado.html',
  styleUrl: './muneco-ahorcado.scss',
})
export class MunecoAhorcado {
  errores = input<number>(0);

  get partesVisible(): boolean[] {
    const numErrores = this.errores();
    return [
      numErrores >= 1, // horca
      numErrores >= 2, // cabeza
      numErrores >= 3, // cuerpo
      numErrores >= 4, // brazo izquierdo
      numErrores >= 5, // brazo derecho
      numErrores >= 6  // piernas
    ];
  }
}
