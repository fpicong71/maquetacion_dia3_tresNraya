// Variables globales

let contadorPartidas = 0;

let turno = "player1";

let jugadasPlayer1 = [];
let jugadasPlayer2 = [];

let ganadasPlayer1 = 0;
let ganadasPlayer2 = 0

// Escuchadores de eventos

window.onload = escucharEventos;


function escucharEventos(){

    // Cambiar de color la casilla
    document.getElementById("a1").addEventListener("mouseover", ponColor,false);
    document.getElementById("a1").addEventListener("mouseout", quitaColor,false);
    document.getElementById("b1").addEventListener("mouseover", ponColor,false);
    document.getElementById("b1").addEventListener("mouseout", quitaColor,false);
    document.getElementById("c1").addEventListener("mouseover", ponColor,false);
    document.getElementById("c1").addEventListener("mouseout", quitaColor,false);

    document.getElementById("a2").addEventListener("mouseover", ponColor,false);
    document.getElementById("a2").addEventListener("mouseout", quitaColor,false);
    document.getElementById("b2").addEventListener("mouseover", ponColor,false);
    document.getElementById("b2").addEventListener("mouseout", quitaColor,false);
    document.getElementById("c2").addEventListener("mouseover", ponColor,false);
    document.getElementById("c2").addEventListener("mouseout", quitaColor,false);

    document.getElementById("a3").addEventListener("mouseover", ponColor,false);
    document.getElementById("a3").addEventListener("mouseout", quitaColor,false);
    document.getElementById("b3").addEventListener("mouseover", ponColor,false);
    document.getElementById("b3").addEventListener("mouseout", quitaColor,false);
    document.getElementById("c3").addEventListener("mouseover", ponColor,false);
    document.getElementById("c3").addEventListener("mouseout", quitaColor,false);

    // Click
    document.getElementById("a1").addEventListener("click",marcar,false);
    document.getElementById("b1").addEventListener("click",marcar,false);
    document.getElementById("c1").addEventListener("click",marcar,false);


    document.getElementById("a2").addEventListener("click",marcar,false);
    document.getElementById("b2").addEventListener("click",marcar,false);
    document.getElementById("c2").addEventListener("click",marcar,false);

    document.getElementById("a3").addEventListener("click",marcar,false);
    document.getElementById("b3").addEventListener("click",marcar,false);
    document.getElementById("c3").addEventListener("click",marcar,false);


    document.getElementById("btnTablero").addEventListener("click", borrarTablero,false);
    document.getElementById("btnResult").addEventListener("click", borrarResultados,false);
}


//Funcionalidades
function ponColor(e)
{
    let elemento = e.currentTarget;
    if(elemento.textContent!=null){
        e.currentTarget.style.backgroundColor= "rgba(37,219,247,0.3)";
    }
}

function quitaColor(e)
{
    let elemento = e.currentTarget;
    if(elemento.textContent!=("o"||"x"))
    {
        e.currentTarget.style.backgroundColor= "rgba(255,255,255,1)";
    }
}

function marcar(e)
{
    let elemento = e.currentTarget;

    if(jugadasPlayer1.length==0 && jugadasPlayer2.length==0)
    {
        contadorPartidas++
        document.getElementById("contadorPartidas").textContent =contadorPartidas;
    }
    if(turno == "player1")
    {
        if(elemento.textContent == ("X"||"O")){
            alert("Casilla ocupada. Marca otra posición");
        }
        else
        {
            elemento.textContent = "X";
            elemento.removeEventListener("click", marcar,false);
            jugadasPlayer1.push(e.currentTarget);

            turno = "player2";
        }
    }
    else
    {
        if(elemento.textContent == ("X"||"O")){
            alert("Casilla ocupada. Marca otra posición");
        }
        else
        {
            elemento.textContent = "O";
            elemento.removeEventListener("click", marcar,false);
            jugadasPlayer2.push(e.currentTarget);
            turno = "player1";
        }

    }
    
}

function borrarTablero()
{
    let casillas = ["a1", "a2" , "a3", "b1", "b2", "b3", "c1", "c2","c3"];
    casillas.forEach( element => 
        {  
            document.getElementById(element).innerHTML= "<span style='color:transparent;'>&nbsp;</span>";
            document.getElementById(element).style.backgroundColor = "rgba(255,255,255,1)";  

            jugadasPlayer1 = [];
            jugadasPlayer2 = [];

            document.getElementById(element).addEventListener("click", marcar,false); 
        } );
}

function borrarResultados()
{

}