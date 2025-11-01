# 🎯 Juego del Ahorcado

Un juego clásico de ahorcado desarrollado con **Angular 20** y **Tailwind CSS** que incluye modo oscuro/claro, animaciones suaves y una interfaz moderna y responsive.

## 🚀 Características

- ✨ **Angular 20** con las últimas características (señales, condicionales @if/@for)
- 🎨 **Tailwind CSS** con tema personalizado en azul
- 🌙 **Modo oscuro/claro** con transiciones suaves
- 📱 **Diseño responsive** que se adapta a cualquier pantalla
- 🎯 **Base de datos local** con +90 palabras en español
- 🎲 **Selección aleatoria** de palabras para cada partida
- ⌨️ **Teclado virtual** y soporte para teclado físico
- 🎭 **Muñeco animado** con SVG y animaciones CSS
- 🔄 **Reinicio rápido** con tecla Enter

## 🎮 Cómo Jugar

1. Al iniciar, se selecciona una palabra aleatoria
2. Adivina las letras usando el teclado virtual o físico
3. Cada error dibuja una parte del muñeco
4. Gana adivinando la palabra antes de completar el dibujo (6 errores máximo)
5. Presiona Enter o el botón para iniciar una nueva partida

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm

### Pasos
1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

3. Abre tu navegador en `http://localhost:4200/`

## 🏗️ Estructura del Proyecto

```
src/app/
├── components/
│   ├── juego-ahorcado/     # Componente principal del juego
│   ├── muneco-ahorcado/    # Componente del muñeco animado (SVG)
│   └── teclado/           # Componente del teclado virtual
├── services/
│   ├── ahorcado.ts        # Lógica del juego y manejo de estado
│   └── theme.ts           # Servicio para modo oscuro/claro
└── assets/
    └── palabras.json      # Base de datos de palabras
```

## 🎨 Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de estilos
- **Angular Signals** - Manejo de estado reactivo
- **SVG** - Gráficos vectoriales para el muñeco
- **CSS Animations** - Animaciones y transiciones

## 🌟 Características Técnicas

- Usa `@if` y `@for` (sintaxis de control de flujo de Angular 20)
- Manejo de estado con Angular Signals
- Servicio HTTP para cargar palabras desde JSON
- Event listeners para teclado físico
- Persistencia del tema en localStorage
- Componentes standalone sin modules
- Diseño mobile-first con Tailwind

## 🚀 Scripts Disponibles

- `ng serve` - Servidor de desarrollo
- `ng build` - Compilar para producción
- `ng test` - Ejecutar pruebas unitarias

## 📝 Notas

Este proyecto fue generado usando Angular CLI versión 20.3.8 y las mejores prácticas de desarrollo moderno.

¡Disfruta jugando! 🎉
