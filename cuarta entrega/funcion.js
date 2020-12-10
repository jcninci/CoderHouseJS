let x = Number(prompt("Cuantas horas trabajas por dia?"))
let y = Number(prompt("Cuantos dias trabajas por semana?"))
let multiplicar = x * y;
let promedio = multiplicar /7 ;
let resultado = sumar (x, y)

function sumar (x, y) {
  console.log(`La cantidad de horas semanales que trabajas es ${x * y}`)
  return multiplicar;
}

function promediar () {
  console.log(`${promedio} horas trabajas promedio por dia`)
  return promedio
}

promediar ()