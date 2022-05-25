function config(){
    if (document.querySelector('.menuConfig') != null) {
        document.querySelector('.menuConfig').remove()
    } else {
        document.querySelector('body').innerHTML +=
        `<div id="menu-edit-frase-fundo" >
        </div> 

        <div class="menuConfig">
            <div  id="configHead"> 
                <p>Configurações</p>
                <button onclick="configOff()">✖</button>
            </div>

            <div id="configLista">
                <p onclick="personalizar()">Personalização</p>       
                <p onclick="siteFavorito()">Meu favorito</p>       
            </div>
        
            <div id="configConteudo">
                <div id="configInicio">
                    <h1>Configurações</h1>
                    <p > Selecione uma configuração no canto esquerdo da janela </p>
                </div>
            </div>
        </div>`
    }
}


/* ==================================================
            🟡 configOff 
==================================================== */
function configOff() {
    document.querySelector('.menuConfig').remove()
    document.querySelector('#menu-edit-frase-fundo').remove()
}

/* ==================================================
           🟡 Personalizar
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
            
            <h2 onclick="cores()" >Cores:</h2>
            <div id="coresDiv">
            </div>
        </div>`;
    }

}
/* ==================== Monet ========================= */
function monet() {
    if (document.getElementById('imagensMonet') != null ){
        document.getElementById('imagensMonet').remove()
    } else {
        document.getElementById('monetDiv').innerHTML += 
        `<div id="imagensMonet">

        </div> 
        `

        var c =0
        
        for (;; ) {
            c++; 
            if (c > 32 ) break;
            console.log(c);
            console.log('VAI');
            
            document.querySelector('#imagensMonet').innerHTML += 
            `<div class="elemento" >
                <div style="background-image: url(./img/Background/Monet/desktop/${c}.jpg);" onclick="monet${c}()" class="elemento-img">  
                </div>
            </div>`;
        }
    }
}

/* ==================== Paisagens ========================= */
function paisagens() {
    if (document.getElementById('paisagensImagens') != null ) {
        document.getElementById('paisagensImagens').remove()
    } else {
        document.getElementById('paisagensDiv').innerHTML +=
        `<div id="paisagensImagens"> 
        
        </div>`

        var i = 0 

        for (;;) {
            i++;

            if (i > 20 ) break;

            document.querySelector('#paisagensImagens').innerHTML += 
            `<div id="paisagensElemento">
                <div style="background-image: url(./img/Background/paisagens/${i}.jpg);" onclick="paisagen${1}()" class="elemento-img">  
                </div>
            </div>`
        }
    }
}


/* ==================================================
           🟡 Site favorito
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
        `<p id="emBreve"> Disponível em breve para adicionar o link do botão "Meu Favorito" no campo de notícias. </p>`
    }
}