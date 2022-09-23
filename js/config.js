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

    /* Remove o menuzinho do Google e da Micro */
    if (document.querySelector('.menu') != null) {
        document.querySelector('.menu').remove()
    }
   
    if (document.querySelector('.menuMicro') != null) {
        document.querySelector('.menuMicro').remove()
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
        /* ================ busca as img no localStorage e imprime > else{ faz o push} e imprime ===== */
        var monetArray0 = localStorage.getItem('monet')
        if (monetArray0 != null) {
            var monetArray = JSON.parse(monetArray0)
            
            for (imprime in monetArray) {
                document.querySelector('#imagensMonet').innerHTML += monetArray[imprime].img;
            }
        } else {
            var monetArray = []
           
            var i = 0 
            
            for (;;) {
                i++; 
               
                if (i > 32 ) break;
                
                monetArray.push({
                    
                    img: `<div id="paisagensElemento" onclick='alteraFundo_monet(${i})'>
                    <div style="background-image: url(./img/Background/Monet/desktop/${i}.jpg);" class="elemento-img">  
                    </div>
                    </div>`
                }) 
            }

            
            for (imprime in monetArray) {
                document.querySelector('#imagensMonet').innerHTML += monetArray[imprime].img;
            }

            localStorage.setItem('monet', JSON.stringify(monetArray))
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

        /* ================ busca as img no localStorage e imprime > else{ faz o push} e imprime ===== */
        var paisagemArray0 = localStorage.getItem('paisagem')
        if (paisagemArray0 != null) {
            var paisagemArray = JSON.parse(paisagemArray0)
            
            for (imprime in paisagemArray) {
                document.querySelector('#paisagensImagens').innerHTML += paisagemArray[imprime].img;
            }
        } else {
            var paisagemArray = []
            console.log(paisagemArray)

            var i = 0 
            for (;;) {
                i++; 
                
                if (i > 20 ) break;
                
                
                paisagemArray.push({
                    
                    img: `<div id="paisagensElemento" onclick='alteraFundo(${i})'>
                    <div style="background-image: url(./img/Background/paisagens/${i}.jpg);" class="elemento-img">  
                    </div>
                    </div>`
                }) 
            }
            
            for (imprime in paisagemArray) {
                document.querySelector('#paisagensImagens').innerHTML += paisagemArray[imprime].img;
            }

            localStorage.setItem('paisagem', JSON.stringify(paisagemArray))
        }
    }
}

/* ==================================================
           🟡 function Alterar fundo paisagem/monet
==================================================== */
function alteraFundo(i){
    var indice = i - 1 //i começa valendo 1, portanto usaremos a var indice para referenciar o indice do objeto

    var paisagemArray0 = localStorage.getItem('paisagem')
    var paisagemArray = JSON.parse(paisagemArray0)

    //manda o número da selecionada para o localStorage para ser buscada na impressão automática
    localStorage.removeItem('paisagemSelecionada') //remove o que tava
    var paisagemSelecionada = i;     
    localStorage.setItem('paisagemSelecionada', JSON.stringify(paisagemSelecionada))

    document.querySelector('.background-img').remove();
    localStorage.removeItem('monetSelecionada') //para a chave ficar nula, e não executar a impressão automatica dela
    

    document.querySelector('.fundoBody').innerHTML+= 
    `<div style="background-image: url(./img/Background/paisagens/${paisagemSelecionada}.jpg);" class="background-img">
    </div>`
}
/*================ Monet============== */
function alteraFundo_monet(i){
    var indice = i - 1 //i começa valendo 1, portanto usaremos a var indice para referenciar o indice do objeto (no caso, usaremos o i só para referenciar a imagem [])

    var monetArray0 = localStorage.getItem('monet')
    var monetArray = JSON.parse(monetArray0)

    /* == Cria um seletor em cima da imagem selecionada */
    for (remove in monetArray) {                           // Remove tudo
        if (document.querySelector('#paisagensElemento')){
            document.querySelector('#paisagensElemento').remove()             
        }
    } 

    /* var monetArray = [] */
            
    var i = 0 
    for (;;) {
       i++; 
      
       if (i > 32 ) break;

        for (imprime in monetArray) {
            if (imprime = indice){
                document.querySelector('#imagensMonet').innerHTML += 
                `<div id="paisagensElemento" onclick='alteraFundo_monet(${i})'>
                    <div style="background-image: url(./img/Background/Monet/desktop/${i}.jpg);" class="elemento-img">  
                    </div>
                    <p>💚</p>
                </div>`
            } else {
                document.querySelector('#imagensMonet').innerHTML += monetArray[imprime].img;
            }
        }
    }   

   

    /* ======= manda o número da selecionada para o localStorage, para ser buscada na impressão automática ====== */
    localStorage.removeItem('monetSelecionada') //remove o nº que ja tava
    var monetSelecionada = i;     
    localStorage.setItem('monetSelecionada', JSON.stringify(monetSelecionada))

    document.querySelector('.background-img').remove();
    localStorage.removeItem('paisagemSelecionada') //remover a chave no caso de paisagem selecionada anteriormente,  e assim não executar a impressão automatica dela

    document.querySelector('.fundoBody').innerHTML+= 
    `<div style="background-image: url(./img/Background/Monet/desktop/${monetSelecionada}.jpg);" class="background-img">
    </div>`
}

/* =====================Imprime automáticamente o fundo novo (paisagem / monet) ==================== */
var paisagemSelecionada0 = localStorage.getItem('paisagemSelecionada');
if (paisagemSelecionada0 != null){
    var paisagemSelecionada = JSON.parse(paisagemSelecionada0);
    
    document.querySelector('.background-img').remove();
    document.querySelector('.fundoBody').innerHTML+= 
    `<div style="background-image: url(./img/Background/paisagens/${paisagemSelecionada}.jpg);" class="background-img">
    </div>`
}

/* =====monet========*/
var monetSelecionada0 = localStorage.getItem('monetSelecionada');
if (monetSelecionada0 != null){
    var monetSelecionada = JSON.parse(monetSelecionada0);
    
    document.querySelector('.background-img').remove();
    document.querySelector('.fundoBody').innerHTML+= 
    `<div style="background-image: url(./img/Background/Monet/desktop/${monetSelecionada}.jpg);" class="background-img">
    </div>`
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