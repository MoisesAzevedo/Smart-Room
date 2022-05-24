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

var monet = [
    {
        img: `  <div class="elemento" >
                    <img src="./img/Background/Monet/1500 x788/11.jpg" onclick="fundo11()">
                </div>`
    }
]

 console.log(monet)

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

            <h2>Monet:</h2>
            <div id="configScroll">
                <div class="imagens">

                </div>  
            </div>
        </div>`;
        
        var c =0
        
        for (;; ) {
            c++; 
            if (c > 32 ) break;
            console.log(c);
            console.log('VAI');
            
            document.querySelector('.imagens').innerHTML += 
            `<div class="elemento" >
                 <img src="./img/Background/Monet/1500 x788/${c}.jpg" onclick="fundo${c}()">
            </div>`;
        }
    }

}

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