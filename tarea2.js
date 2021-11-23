let h1resultado= document.querySelector("#resultado1")

let estatura= prompt("Escriba su estatura en metros")
let peso= prompt("Escriba su peso en kilogramos")
let calculo= (Number(peso)/ Number(estatura **2))

if (calculo> Number(18.5)){
    h1resultado = (`Hola, tu IMC es de menos de 18,5, por lo cuál estás clasificado en insuficiencia ponderal`)
}
else (Number(18.5)< calculo < Number(24.9))(
    h1resultado = (`Hola, tu IMC es de entre 18.5 y 24.9, por lo tanto estás clasificado en intervalo normal`)
)
if (calculo >= Number(25)){
    h1resultado = (`Hola, tu IMC es igual o mayor a 25, por lo tanto está clasificado en sobrepeso`)
}

