

// TA TUDO SEM PONTO E VÍRGULA


/* ======================================
      🟡  Funções: iframes de noticias
====================================== */
var news_head = ` 
    <div class="news-head">
        <img src="./img/menuBarras.png" alt="">

        <a href="#janela-noticia">
            <p onclick="noticias()">Tecnologia</p>
            <p onclick="noticiasA()">Techradar</p>
            <p onclick="noticias2()">Diversas</p>
            <p onclick="noticiasB()">Internacinal</p>
            <p onclick="noticias3()">Dinheiro</p>
            <p onclick="noticiasC()">SturtUp</p>
            <p onclick="principais_noticias2()">Meu Favorito</p>
            <p onclick="principais_noticias()">Mais Noticias</p>
        </a>    

        <button onclick="encerrarNews()">✖</button>
    </div>`

function noticias(){
    //Remove o button Principais Noticias
              
   
    //remove o iframe (se tiver algum ifreme ja aberto)
    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    } 
   
    //imprime o novo iframe 
    document.querySelector('.main').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            ${news_head}

            <iframe src="https://www.tecmundo.com.br/" class="iframe"></iframe> 
        </div> `    
}

function noticias2(){
   

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            ${news_head}

            <iframe src="https://www.cnnbrasil.com.br/" class="iframe"></iframe> 
        </div> `
}

function noticias3(){
    

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
           ${news_head}

            <iframe src="https://www.infomoney.com.br/" class="iframe"></iframe> 
        </div> `
}

function noticiasA(){
    //Remove o button Principais Noticias
               
   
    //remove o iframe (se tiver algum ifreme ja aberto)
    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    } 
   
    //imprime o novo iframe 
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
           ${news_head}

            <iframe src="https://www.techradar.com/" class="iframe"></iframe> 
        </div> `    
}

function noticiasB(){
    

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            ${news_head}
        
            <iframe src="https://www.bundle.app/en/breakingNews" class="iframe"></iframe> 
        </div> `
}

function noticiasC(){
    
    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            ${news_head}
            
            <iframe src="https://startups.com.br/noticias/" class="iframe"></iframe> 
        </div> `
}

/* ======================= Principais noticias (bing) / Link do usuário ============ */

function principais_noticias(){
    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }
    
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            ${news_head}
            <iframe src="https://www.bing.com/news/search?q=Brasil&nvaug=%5bNewsVertical+Category%3d%22rt_Brazil%22%5d&FORM=NSBABR" class="iframe"></iframe> 
        </div> `
}
/* -----------------------Botão User--------------------- */
function principais_noticias2(){
  

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }
    
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            ${news_head} 
            <iframe src="https://www.suno.com.br/artigos/" class="iframe"></iframe>
            <div style="display: none;" class="principais2"></div> 
        </div> `
    
      
    
}

//============= função do botão Encerrar Noticias =========== 
function encerrarNews(){  
    document.querySelector('#janela-noticia').remove();
}

/* ================================================ */


/* ======================================
      Scroll suave
====================================== */
function ScrollOnClick(e){
    e.preventDefault();

    const elemento = document.querySelector(".news-icon a");
    const id = elemento.getAttribute('href') ;
    console.log(id)
    const to = document.querySelector(id).offsetTop;

   
    window.scroll({
        top: to,
        behavior: "smooth",
    })
} 



/* ================================================ */
