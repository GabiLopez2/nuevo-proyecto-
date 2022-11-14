//alert()
document.write("<p>----------------------</p>")
document.write("<p>MONEDAS</p>")
document.write("<p> USD (Dolar Estadounidense)</p>")
document.write("<p> CLP (Peso Chileno)</p>")
document.write("<p> EUR (Euro)</p>")
document.write("<p> ARS (Peso Argentino)</p>")
let valor1
let valor2
let cantidad
let moneda1
let moneda2
const monedas = [{ moneda: 'USD', valor: 1 },
{ moneda: 'EUR', valor: 1 },
{ moneda: 'ARS', valor: 159.72 },
{ moneda: 'CLP', valor: 905 }]
function buscarmoneda() {
    moneda1 = prompt("CONVERTIR (USD/EUR/ARS/CLP)")
    moneda2 = prompt(" A (USD/EUR/ARS/CLP)")
    cantidad = Number(prompt(" CANTIDAD"))
    for (const moneda of monedas) {
        if (moneda.moneda == moneda1.toUpperCase()) {
            valor1 = moneda.valor
        }
        if (moneda.moneda == moneda2.toUpperCase()) {
            valor2 = moneda.valor
        }
    }
    resultado = (valor2 / valor1) * cantidad
    return resultado
}
buscarmoneda()
document.write("<p>" + resultado.toFixed(2) +" "+moneda2.toUpperCase() + "</p>")


let otra = prompt("¿Desea otra operación? (SI/NO)")
if (otra.toUpperCase() == "NO") {
    document.write("<p>Gracias por utilizar el conversor</p>")
    document.write("<p>=====================================</p>")
} else {
    while (otra.toUpperCase() == "SI") {
        buscarmoneda()
        document.write("<p>" + resultado.toFixed(2) +" "+moneda2.toUpperCase() + "</p>")
        otra = prompt("¿Desea otra operación? (SI/NO)")
    }
    document.write("<p>Gracias por utilizar el conversor</p>")
    
}   
