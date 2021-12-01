function trocarP(){ 
    let perso = document.getElementById("perso").innerText;
    if (perso === "Sasuke") {
    document.getElementById("trocarpersonagem").src="./sasuke.png";
    document.getElementById("trocarper").src="./sasuke.png";
    document.getElementById("perso").innerText = "Naruto";
    }
    else {
    document.getElementById("trocarpersonagem").src="./Narutinho.png";
    document.getElementById("trocarper").src="./Narutinho.png";
    document.getElementById("perso").innerText = "Sasuke";

    }
}


function trocarFundo() {
    let thema = document.getElementById("thema").innerText;
    if (thema === "Tema Dark") {
    document.getElementById("error").style = "background: linear-gradient(0deg,rgb(15, 12, 12),#332b23e5);"
    document.getElementById("thema").innerText = "Tema Claro"; 
    }
    else {
        document.getElementById("error").style = "background: linear-gradient(0deg,#fff,#f47703e7);"
        document.getElementById("thema").innerText = "Tema Dark"; 
    }
}
