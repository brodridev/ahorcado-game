import { Component, inject, HostListener } from '@angular/core';
import { Ahorcado } from '../../services/ahorcado';
import { Theme } from '../../services/theme';
import { MunecoAhorcado } from '../muneco-ahorcado/muneco-ahorcado';
import { Teclado } from '../teclado/teclado';

@Component({
  selector: 'app-juego-ahorcado',
  imports: [MunecoAhorcado, Teclado],
  templateUrl: './juego-ahorcado.html',
  styleUrl: './juego-ahorcado.scss',
})
export class JuegoAhorcado {
  private ahorcadoService = inject(Ahorcado);
  private themeService = inject(Theme);

  estadoJuego = this.ahorcadoService.estadoJuego;
  isDarkMode = this.themeService.isDarkMode;

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const letra = event.key.toUpperCase();
    
    // Solo procesar letras del alfabeto
    if (/^[A-Z]$/.test(letra)) {
      this.onLetraSeleccionada(letra);
    } else if (event.key === 'Enter') {
      this.nuevaPartida();
    }
  }

  onLetraSeleccionada(letra: string): void {
    this.ahorcadoService.adivinarLetra(letra);
  }

  nuevaPartida(): void {
    this.ahorcadoService.nuevaPartida();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getMensajeFinal(): string {
    const estado = this.estadoJuego();
    if (!estado.juegoTerminado) return '';
    
    return estado.juegoGanado 
      ? '¡Felicitaciones! ¡Has ganado!' 
      : `¡Perdiste! La palabra era: ${estado.palabraActual}`;
  }

  getColorMensaje(): string {
    const estado = this.estadoJuego();
    if (!estado.juegoTerminado) return '';
    
    return estado.juegoGanado 
      ? 'text-green-600 dark:text-green-400' 
      : 'text-red-600 dark:text-red-400';
  }
}
