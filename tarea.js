let h1saludo= document.querySelector("#saludo")
let h2edad= document.querySelector("#edad")
let nombre = prompt("Ingrese su nombre y apellido")
let edad =  prompt("Ingrese su edad")
let suma = (Number(edad)+ Number(10))
h1saludo.innerHTML = `Hola ${nombre}`
h2edad.innerHTML = `Tendrás ${suma} en diez años`


