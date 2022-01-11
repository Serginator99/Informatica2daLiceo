let nPisos = Number(prompt("Ingrese los pisos que desea"));

function piso(){
    console.log("|  _  _  | ")
    console.log("| |_||_| |")
    console.log("|________|")
}
function pisobase(){
    console.log("|  _  _  |")
    console.log("| |_||_| |")
    console.log("|    _   |")
    console.log("|___| |__|")
}
function techo(){
    console.log(" ________ ")
    console.log("/       \\")
    console.log("__________")
}

function casa (nPisos){
    techo()
    for(let i= 0; i<nPisos; i++){
        piso()
        }
    pisobase()
}