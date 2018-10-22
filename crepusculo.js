var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOk: false
}
var cantidad = aleatorio(5, 25)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas)

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk == true){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    console.log(cantidad);
    
    for(var v=0; v < cantidad; v++){
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
    
        if(vaca.cargaOk == true){
            papel.drawImage(vaca.imagen, x, y);
        }
    
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado =Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}