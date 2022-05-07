

// TA TUDO SEM PONTO E VÍRGULA



function noticias(){
    if (document.querySelector('.janela-noticia') != null) {
        document.querySelector('.janela-noticia').remove();
    } 

        /* document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> ` */
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

    /* document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> ` */
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

    /* document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> ` */
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" class="janela-noticia">
            <button onclick="stopNews()"  class="botao2">Stop News</button> 
            <iframe src="https://www.infomoney.com.br/" class="iframe"></iframe> 
        </div> `
}

function stopNews(){
    document.querySelector('.janela-noticia').remove();
}

