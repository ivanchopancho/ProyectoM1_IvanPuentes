# 🎨 Generador de Paletas

Aplicación web interactiva para generar paletas de colores a partir de diferentes armonías cromáticas y estilos visuales.

El proyecto fue desarrollado desde cero utilizando HTML, CSS y JavaScript, sin frameworks.

## ✨ Funcionalidades

- Generación de paletas de 6, 8 o 9 colores.

## Armonías cromáticas

### Monocromática

![Armonía monocromática](images/monochromatic.png)

### Análoga

![Armonía análoga](images/analogous.png)

### Complementaria

![Armonía complementaria](images/complementary.png)

### Split-complementaria

![Armonía split-complementaria](images/split-complementary.png)

### Triádica

![Armonía triádica](images/triadic.png)

### Tetrádica

![Armonía tetrádica](images/tetradic.png)

- Diferentes estilos visuales:
  - Vibrante
  - Pastel
  - Oscura
  - Clara
  - Apagada

- Conversión de colores entre HSL, RGB y HEX.
- Copiado de valores de color al portapapeles.
- Bloqueo individual de colores para conservarlos al generar nuevas paletas.
- Efecto visual opcional de brillantina.
- Diseño responsive.
- Controles accesibles mediante etiquetas, estados de foco y atributos ARIA.

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

## 📁 Estructura

```text
Desarrollo/
├── index.html
├── styles.css
└── script.js
```

### `index.html`

Contiene la estructura semántica de la aplicación, los controles de configuración y el área donde se muestran las paletas.

### `styles.css`

Contiene los estilos de la aplicación, incluyendo el diseño responsive, estados de interacción y el efecto visual de brillantina.

### `script.js`

Contiene la lógica de generación de colores, las armonías cromáticas, los estilos, las conversiones de color, el bloqueo de colores, el copiado al portapapeles y la generación del efecto de brillantina.

## 🚀 Ejecutar localmente

No se necesitan dependencias ni un proceso de compilación.

### 1. Clonar el repositorio

```bash
git clone https://github.com/ivanchopancho/ProyectoM1_IvanPuentes
```

### 2. Entrar en la carpeta

```bash
cd color-palette
```

### 3. Abrir la aplicación

Abrir `index.html` en un navegador.

También puede utilizarse una extensión como Live Server para ejecutar el proyecto durante el desarrollo.

## 🎨 Cómo utilizar la aplicación

1. Seleccionar la cantidad de colores.
2. Seleccionar una armonía cromática.
3. Seleccionar un estilo visual.
4. Presionar **Generar paleta**.
5. Hacer clic sobre los valores HEX, RGB o HSL para copiarlos.
6. Utilizar el botón de bloqueo para conservar colores específicos durante nuevas generaciones.
7. Activar **Efecto brillantina** si se desea añadir el efecto visual.

Cuando se selecciona la armonía aleatoria, el selector de estilo se oculta porque los colores se generan sin restricciones estéticas predefinidas.

## 🌐 Demo

La aplicación está desplegada mediante GitHub Pages:

**[Ver aplicación](https://ivanchopancho.github.io/ProyectoM1_IvanPuentes/)**

## 📚 Conceptos practicados

Durante el desarrollo del proyecto se practicaron:

- Manipulación del DOM.
- Event listeners y event delegation.
- Generación aleatoria de valores.
- Objetos y arrays de JavaScript.
- Funciones reutilizables.
- Separación de reglas mediante objetos.
- Generación dinámica de HTML.
- Conversión entre modelos de color.
- HSL, RGB y HEX.
- CSS Grid y Flexbox.
- Diseño responsive.
- Accesibilidad básica.
- Uso del portapapeles mediante `Clipboard API`.
- Animaciones y efectos visuales con CSS.
- Uso de CSS custom properties.
- Git y GitHub.
- Deployment mediante GitHub Pages.

## 👤 Autor

Ivan Puentes
