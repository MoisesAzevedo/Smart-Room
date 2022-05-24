function config(){
    if (document.querySelector('.menuConfig') != null) {
        document.querySelector('.menuConfig').remove()
    } else {
        document.querySelector('body').innerHTML +=
        `<div id="menu-edit-frase-fundo" onclick="menu_edit_off()" ></div> 
         <div class="menuConfig">
            <div id="configLista">
                <p onclick="personalizar()">Personalização</p>       
                <p onclick="siteFavorito()">Editar site favorito</p>       
            </div>
        
            <div id="configConteudo">
                <div id="configInicio">
                    <h1>Congurações</h1>
                    <p > Selecione uma configuração no canto esquerdo da janela </p>
                </div>
            </div>
        </div>`
    }
}


/* ==================================================
            Personalizar
==================================================== */
function personalizar() {
    if (document.getElementById('personalizar') != null) {
        console.log("oi")
    } else {

        if (document.getElementById('emBreve') != null) {
            document.getElementById('emBreve').remove()
        }
        if (document.getElementById('configInicio') != null) {
            document.getElementById('configInicio').remove()
        }

        document.getElementById('configConteudo').innerHTML += 
        `
        <div id="personalizar">
            <h1>Alterar plano de fundo</h1>

            <h2 onclick="monet()" >Monet:</h2>
            <div id="monetDiv">
            </div> 

            <h2 onclick="paisagens()" >Paisagens:</h2>
            <div id="paisagensDiv">
            </div>
        </div>`;
    }

}
/* ==================== Monet ========================= */
function monet() {
    if (document.getElementById('monetScroll') != null ){
        document.getElementById('monetScroll').remove()
    } else {
        document.getElementById('monetDiv').innerHTML += 
        `<div id="monetScroll"> 
             <div id="imagensMonet">

              </div> 
        </div> `
        
              
        var c =0
        
        for (;; ) {
            c++; 
            if (c > 32 ) break;
            console.log(c);
            console.log('VAI');
            
            document.querySelector('#imagensMonet').innerHTML += 
            `<div class="elemento" >
                 <img src="./img/Background/Monet/1500 x788/${c}.jpg" onclick="monet${c}()">
            </div>`;
        }
    }
}

/* ==================== Paisagens ========================= */
function paisagens() {
    if (document.getElementById('paisagensScroll') != null ) {
        document.getElementById('paisagensScroll').remove()
    } else {
        document.getElementById('paisagensDiv').innerHTML +=
        `<div id="paisagensScroll">  
            <div id="paisagensImagens">
            
            </div> 
        </div>`

        var i = 0 

        for (;;) {
            i++;

            if (i > 20 ) break;

            document.querySelector('#paisagensImagens').innerHTML += 
            `<div id="paisagensElemento">
                <img src="./img/Background/paisagens/${i}.jpg" onclick="paisagen${1}()" alt="">
            </div>`
        }
    }
}
/* ==================================================
            Site favorito
==================================================== */
function siteFavorito() {
    if (document.getElementById('emBreve') != null) {
        alert('Calma, já vai sair (kk)')
    } else {

        if (document.getElementById('personalizar') != null) {
            document.getElementById('personalizar').remove()
        }
        if (document.getElementById('configInicio') != null) {
            document.getElementById('configInicio').remove()
        }

        document.getElementById('configConteudo').innerHTML += 
        `<p id="emBreve"> Disponível em breve </p>`
    }
}