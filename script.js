

// TA TUDO SEM PONTO E VÍRGULA



function noticias(){            //remove o iframe
    if (document.querySelector('.janela-noticia') != null) {
        document.querySelector('.janela-noticia').remove();
    } 

        /* imprime o iframe */
        document.querySelector('body').innerHTML += ` 
            <div style="width: 100%" class="janela-noticia">
                <button onclick="stopNews()"  class="botao2">Stop News</button> 
                <iframe src="https://www.tecmundo.com.br/" class="iframe"></iframe> 
            </div> `    
}

function noticias2(){
    if (document.querySelector('.janela-noticia') != null) {
        document.querySelector('.janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" class="janela-noticia">
            <button onclick="stopNews()" class="botao2">Stop News</button> 
            <iframe src="https://www.cnnbrasil.com.br/" class="iframe"></iframe> 
        </div> `
}

function noticias3(){
    if (document.querySelector('.janela-noticia') != null) {
        document.querySelector('.janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" class="janela-noticia">
            <button onclick="stopNews()"  class="botao2">Stop News</button> 
            <iframe src="https://www.infomoney.com.br/" class="iframe"></iframe> 
        </div> `
}

function stopNews(){  //função do botão Stop News 
    document.querySelector('.janela-noticia').remove();
}

/* ======================================
        Função botão google
====================================== */

function google(){
    if (document.querySelector('.menu') != null ){
        document.querySelector('.menu').remove();
    } else {
        document.querySelector('body').innerHTML += `
        <div class="menu" >
            <a href="https://docs.google.com/" target="_blank" class="icones">  
                <div class="icones">
                    <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png">
                    <p>Documentos</p>
                </div>
                <div class="icones-fundo">  </div>
            </a> 
        </div>
        `
    }
}