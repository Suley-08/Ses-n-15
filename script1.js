let importe =prompt (`Ingrese un monto`) 

if (importe > 149 ) {
    alert(`Se desconto ${(importe*12)/100}`)
    alert(`El total del importe final es ${[(importe-(importe*12)/100)]} soles`)
}