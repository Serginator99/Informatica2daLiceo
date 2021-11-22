let urlTriste = "https://pbs.twimg.com/profile_images/1374804905010020352/XDbgf_2y_400x400.jpg"
let urlFeliz = "https://toppng.com/uploads/preview/free-carita-feliz-para-colorear-de-emoji-para-desenhar-11562899600zjsv820t7p.png"
let imgHtml = document.querySelector("#imagenCarita")

let numero1= prompt("Primer número")
let numero2= prompt("Segundo número")
let numero3= prompt("Tercer número")
let operacion1= (Number(numero1)+ Number(numero2)+ Number(numero3))
let operacion2= (Number(operacion1)/3)
if (operacion2 > Number(6)){
    imgHtml.src = urlFeliz
}
else (operacion2 <= Number(6))(
    imgHtml.src = urlTriste
)