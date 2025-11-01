import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  imports: [],
  templateUrl: './teclado.html',
  styleUrl: './teclado.scss',
})
export class Teclado {
  letrasUsadas = input<string[]>([]);
  juegoTerminado = input<boolean>(false);
  
  letraSeleccionada = output<string>();

  readonly alfabeto = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  onLetraClick(letra: string): void {
    if (!this.isLetraUsada(letra) && !this.juegoTerminado()) {
      this.letraSeleccionada.emit(letra);
    }
  }

  isLetraUsada(letra: string): boolean {
    return this.letrasUsadas().includes(letra);
  }

  getEstadoLetra(letra: string): string {
    if (this.isLetraUsada(letra)) {
      return 'usado';
    }
    if (this.juegoTerminado()) {
      return 'deshabilitado';
    }
    return 'disponible';
  }

  getClaseBoton(letra: string): string {
    const baseClasses = 'text-white shadow-lg';
    
    if (this.isLetraUsada(letra)) {
      return `${baseClasses} bg-gray-500 cursor-not-allowed opacity-50`;
    }
    
    if (this.juegoTerminado()) {
      return `${baseClasses} bg-gray-400 cursor-not-allowed opacity-75`;
    }
    
    return `${baseClasses} bg-primary-600 hover:bg-primary-700 cursor-pointer`;
  }
}
