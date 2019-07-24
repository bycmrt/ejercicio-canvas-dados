function dibuje1()
{
    var canvasc = document.getElementById("myCanvasc");
    var ctxc = canvasc.getContext("2d");
    ctxc.clearRect(0,0,500,500)
    ctxc.beginPath();
    ctxc.arc(95,50,40,0,2*Math.PI);
    ctxc.fillStyle = `red`
    ctxc.fill();
    ctxc.stroke();
    
}

function dibuje2()
{
    var canvasc = document.getElementById("myCanvasc");
    var ctxc = canvasc.getContext("2d");
    ctxc.clearRect(0,0,500,500)
    
    ctxc.beginPath();
    ctxc.arc(100,100,40,0,2*Math.PI);
    ctxc.fillStyle = `black`
    ctxc.fill();
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.arc(400,400,40,0,2*Math.PI);
    ctxc.fillStyle = `black`
    ctxc.fill();
    ctxc.stroke();
    
}

function dibuje3()
{
    var canvasc = document.getElementById("myCanvasc");
    var ctxc = canvasc.getContext("2d");
    ctxc.clearRect(0,0,500,500)
    
    ctxc.beginPath();
    ctxc.arc(100,100,40,0,2*Math.PI);
    ctxc.fillStyle = `black`
    ctxc.fill();
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.arc(250,250,40,0,2*Math.PI);
    ctxc.fillStyle = `black`
    ctxc.fill();
    ctxc.stroke();
    

    ctxc.beginPath();
    ctxc.arc(400,400,40,0,2*Math.PI);
    ctxc.fillStyle = `black`
    ctxc.fill();
    ctxc.stroke();
    
}


function generarNumeroaleatorio()
{
var valorDado=Math.floor((Math.random()*6)+1);
document.getElementById("numeroGenerado").innerHTML=valorDado
dibujarDado(valorDado)
}

function dibujarDado(valorDado)//funcion argumento
{
switch(valorDado)
{
case 1:
   
    dibuje1()
    break;

    case 2:
    dibuje2()
    break;

    case 3:
    dibuje3()
    break;

    case 4:
    dibuje4()
    break;

    case 5:
    dibuje5()
    break;

    case 6:
    dibuje6()
    break;

}
}