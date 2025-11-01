import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EstadoJuego {
  palabraActual: string;
  palabraMostrada: string[];
  letrasUsadas: string[];
  errores: number;
  maxErrores: number;
  juegoTerminado: boolean;
  juegoGanado: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Ahorcado {
  private palabras: string[] = [];
  
  estadoJuego = signal<EstadoJuego>({
    palabraActual: '',
    palabraMostrada: [],
    letrasUsadas: [],
    errores: 0,
    maxErrores: 6,
    juegoTerminado: false,
    juegoGanado: false
  });

  constructor(private http: HttpClient) {
    this.cargarPalabras();
  }

  private async cargarPalabras(): Promise<void> {
    try {
      const data = await this.http.get<{palabras: string[]}>('assets/palabras.json').toPromise();
      this.palabras = data?.palabras || [];
      this.nuevaPartida();
    } catch (error) {
      console.error('Error cargando palabras:', error);
      // Fallback con palabras por defecto
      this.palabras = ['CASA', 'PERRO', 'GATO', 'MESA', 'SILLA'];
      this.nuevaPartida();
    }
  }

  nuevaPartida(): void {
    if (this.palabras.length === 0) return;
    
    const palabraAleatoria = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    
    this.estadoJuego.set({
      palabraActual: palabraAleatoria,
      palabraMostrada: Array(palabraAleatoria.length).fill('_'),
      letrasUsadas: [],
      errores: 0,
      maxErrores: 6,
      juegoTerminado: false,
      juegoGanado: false
    });
  }

  adivinarLetra(letra: string): boolean {
    const estado = this.estadoJuego();
    
    if (estado.juegoTerminado || estado.letrasUsadas.includes(letra)) {
      return false;
    }

    const nuevasLetrasUsadas = [...estado.letrasUsadas, letra];
    let nuevaPalabraMostrada = [...estado.palabraMostrada];
    let nuevosErrores = estado.errores;
    let letraEncontrada = false;

    // Verificar si la letra está en la palabra
    for (let i = 0; i < estado.palabraActual.length; i++) {
      if (estado.palabraActual[i] === letra) {
        nuevaPalabraMostrada[i] = letra;
        letraEncontrada = true;
      }
    }

    if (!letraEncontrada) {
      nuevosErrores++;
    }

    // Verificar si ganó
    const juegoGanado = !nuevaPalabraMostrada.includes('_');
    const juegoTerminado = juegoGanado || nuevosErrores >= estado.maxErrores;

    this.estadoJuego.set({
      ...estado,
      palabraMostrada: nuevaPalabraMostrada,
      letrasUsadas: nuevasLetrasUsadas,
      errores: nuevosErrores,
      juegoTerminado,
      juegoGanado
    });

    return letraEncontrada;
  }

  obtenerLetrasDisponibles(): string[] {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alfabeto.split('').filter(letra => 
      !this.estadoJuego().letrasUsadas.includes(letra)
    );
  }
}
