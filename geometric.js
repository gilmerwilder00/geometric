
import { calcularPerimetro } from './perimeter.js';
import { calcularArea } from './area.js';
import { rectangulos } from './rectangleData.js';

// Definición de los rectángulos
// const rectangulo1 = { ancho: 5, altura: 3 };
// const rectangulo2 = { ancho: 10, altura: 4 };
// const rectangulo3 = { ancho: 2, altura: 8 };

// Funciones para calcular perímetro y área
// function calcularPerimetro(ancho, altura) {
//   return 2 * (ancho + altura);
// }

// function calcularArea(ancho, altura) {
//   return ancho * altura;
// }

// Función para imprimir los resultados en la vista
function imprimirResultados() {

//   const rectangulos = [rectangulo1, rectangulo2, rectangulo3];

  const tabla = document.getElementById("resultado");

  rectangulos.forEach((rect, index) => {

    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td>Rectángulo ${index + 1}</td>
    <td>${rect.ancho}</td>
    <td>${rect.altura}</td>
    <td>${calcularPerimetro(rect.ancho, rect.altura)}</td>
    <td>${calcularArea(rect.ancho, rect.altura)}</td>
    `;
    tabla.appendChild(fila);

  });
}


// Llamada a la función al cargar la página
document.addEventListener("DOMContentLoaded", imprimirResultados);
