import { Component, signal } from '@angular/core';
import { JuegoAhorcado } from './components/juego-ahorcado/juego-ahorcado';

@Component({
  selector: 'app-root',
  imports: [JuegoAhorcado],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ahorcado-game');
}
