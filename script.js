let j1 = prompt("Jogador 1: Par ou Impar?");
let j2 = null;
let v1 = null, v2 = null;
let txt = "";


//---------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function P2(){
    if(j1 == "Par"){
        j2  = "Impar";
        txt += "Jogador 1-> " + j1 + "    Jogador 2-> " + j2;
        txt += "<br>" + "<hr>";
    }else{
        j2  = "Par";
        txt += "Jogador 1-> " + j1 + "    Jogador 2-> " + j2;
        txt += "<br>" + "<hr>";
    }
};

function win(){
    resultadoModulo = (v1 + v2) % 2;
    console.log(v1+v2,v1,v2,resultadoModulo)
    if(((j1 == "Par") && (resultadoModulo == 0)) || ((j1 == "Impar" ) && (resultadoModulo != 0) )){
        txt += "Jogador 1-> venceu" ;
        txt += "<br>" + "<hr>";
        
    }else{
        txt += "Jogador 2-> venceu" ;
        txt += "<br>" + "<hr>";
    };
};
//---------------------------------

P2();

do{
  v1 = parseInt(prompt("Jogador 1: Escolha um valor de 0-10"));
}while((v1 < 0) || (v1 > 10));
v2 = getRandomInt(11);

txt += "Jogador 1->" + v1 + "    Jogador 2->" + v2;
txt += "<br>" + "<hr>";

win();
document.getElementById("demo").innerHTML = txt;