let valor1
let valor2
let cantidad
let moneda1
let moneda2
let x = 0
const monedas = [{ moneda: 'USD', valor: 1 },
{ moneda: 'EUR', valor: 0.963695 },
{ moneda: 'ARS', valor: 315 },
{ moneda: 'CLP', valor: 912.25}, 
{ moneda: 'MXN', valor: 19.3527},
{ moneda: 'COP', valor: 4883.74},
{ moneda: 'YEN', valor: 139.28}]
function buscarmoneda() {
    
    for (const moneda of monedas) {
        if (moneda.moneda == moneda1.toUpperCase()) {
            valor1 = moneda.valor
        }
        if (moneda.moneda == moneda2.toUpperCase()) {
            valor2 = moneda.valor
        }
    }
    resultado = (valor2 / valor1) * cantidad
    resultadofinal = resultado.toFixed(2)
    return resultadofinal
}
function removeAllChilds(a)
 {
 var a=document.getElementById(a);
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }
const contenedor = document.getElementById("res")
const btn = document.getElementById("calcular")
btn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    removeAllChilds("res")
    moneda1 = document.getElementById("monedaUno").value
    moneda2 = document.getElementById("monedaDos").value
    cantidad = document.getElementById("cantidad").value
    buscarmoneda()
    let items= cantidad + " " + moneda1 + " a " + moneda2 + " = " +resultadofinal+moneda2
    localStorage.setItem("resultados"+x,items)
    x+=1
    if(localStorage.length != 0){
        for(let i=0; i<localStorage.length; i+=1 ){
            const elementop = document.createElement("p")
            elementop.innerHTML = localStorage.getItem("resultados"+i)
            contenedor.appendChild(elementop)
        }
    }

})
if(localStorage.length != 0){
    for(let i=0; i<localStorage.length; i+=1 ){
        const elementop = document.createElement("p")
        elementop.innerHTML = localStorage.getItem("resultados"+i)
        contenedor.appendChild(elementop)
    }
}

const limpiar = document.getElementById("botonLimpiar")
limpiar.addEventListener('click', (evt)=>{
    localStorage.clear()
    removeAllChilds("res")
    x = 0
})