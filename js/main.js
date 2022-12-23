const moneda1 = document.querySelector("#monedaUno")
const moneda2 = document.querySelector("#monedaDos")
const cantidad = document.querySelector("#cantidad")
const cantidad2= document.querySelector("#cantidad2")
let x = 0


async function valormoneda(lur){
    const result = await fetch(lur)
    const dato = await result.json()
    return dato
}

function render(valori){
    cantidad2.setAttribute("value",valori.result.toFixed(2))
    document.getElementById("cantidad2").value = valori.result.toFixed(2)
    
}
function render2(valori){
    cantidad.setAttribute("value",valori.result.toFixed(2))
    document.getElementById("cantidad").value = valori.result.toFixed(2)
    
}
async function calcularCambio(){
    const uri = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const valor = await valormoneda(uri)
    render(valor)
}
calcularCambio()
moneda1.addEventListener('change',async ()=>{
    const uri = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(uri)
    render(monedas)
})
moneda2.addEventListener('change',async ()=>{
    const uri = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(uri)
    render(monedas)
})
cantidad.addEventListener('input',async ()=>{
    const uri = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(uri)
    render(monedas)
})
cantidad2.addEventListener('input',async ()=>{
    const uri = "https://api.exchangerate.host/convert?from="+moneda2.value+"&to="+moneda1.value+"&amount="+cantidad2.value
    const monedas = await valormoneda(uri)
    render2(monedas)
})

function removeAllChilds(a)
 {
 a = document.getElementById(a);
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }
const contenedor = document.getElementById("res")
const btn = document.querySelector("#guardar")
btn.addEventListener('click',async ()=>{
    removeAllChilds("res")
    const uri = "https://api.exchangerate.host/convert?from="+moneda1.value+"&to="+moneda2.value+"&amount="+cantidad.value
    const monedas = await valormoneda(uri)
    const resultadofinal = monedas.result.toFixed(2)
    let items= cantidad.value + " " + moneda1.value + " a " + moneda2.value + " = " +resultadofinal+moneda2.value
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
limpiar.addEventListener('click', ()=>{
    localStorage.clear()
    removeAllChilds("res")
    x = 0
})