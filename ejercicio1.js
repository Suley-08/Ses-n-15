const bonificación = 7
let nombre =prompt("Ingrese el nombre del trabajador")
let sueldob = +prompt("Ingrese el sueldo básico del trabajador")
let numhijos = +prompt("Ingrese el numero de hijos del trabajador")

if(numhijos >=1){
    let sueldofinal = sueldob + (sueldob*bonificación/100)
    alert(`Su bonificación es ${bonificación}% y el sueldo final es ${sueldofinal}`)
}else{
    alert(`Ud. no accede a la bonificación, porque no tiene ningún hijo.`)
}