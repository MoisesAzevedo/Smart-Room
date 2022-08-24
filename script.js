

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
    if (document.querySelector('#janela-noticia')) {
        console.log('Opa Rapa')
    } else {

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
}

//============= função do botão Encerrar Noticias =========== 
function encerrarNews(){  
    document.querySelector('#janela-noticia').remove();
}

/* ===================================================================
      🟡  Funções dos botões menu Google (Mincrosof: menuMicro.js)
=================================================================== */

//Google:

var formsGoogle0 = [
    {
        icone: 'https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png',
        nome: 'Documentos',
        link: 'https://docs.google.com/'
    },
    {
        icone: 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png',
        nome: 'Keep',
        link: 'https://keep.google.com/'
    },
    {
        icone: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png',
        nome: 'Planilhas',
        link: 'https://docs.google.com/spreadsheets/u/0/'
    },
    {
        icone: './img/icon/youtube.png',
        nome: 'Youtube',
        link: 'https://www.youtube.com/'
    },
    {
        icone: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png',
        nome: 'Drive',
        link: 'https://drive.google.com/'
    },
    {
        icone: './img/icon/gmail.png',
        nome: 'Gmail',
        link: 'https://mail.google.com/'
    },
    {
        icone: './img/icon/fotos.png',
        nome: 'Fotos',
        link: 'https://photos.google.com/'
    },
    {
        icone: 'https://cdn-icons-png.flaticon.com/512/2642/2642502.png',
        nome: 'Maps',
        link: 'https://www.google.com.br/maps'
    },
    {
        icone: './img/icon/meet.png',
        nome: 'Meet',
        link: 'https://meet.google.com/'
    },
    {
        icone: './img/icon/tradutor.png',
        nome: 'Tradutor',
        link: 'https://translate.google.com.br/'
    },
    {
        icone: './img/icon/noticias.png',
        nome: 'Notícias',
        link: 'https://news.google.com/'
    },
    {
        icone: './img/icon/agenda.png',
        nome: 'Agenda',
        link: 'https://calendar.google.com/'
    },
]

function google(){
    if (document.querySelector('.menu') != null ){
        document.querySelector('.menu').remove();
    } else {
        document.querySelector('body').innerHTML += `
        <div class="menu">  <!-- script.js-->
            <div id="google-apps-scroll">
                <div id="google-in-scroll">
                </div>

                <button id="addGoogle-button" onclick="userAppsGoogle()"> Adicionar apps do Google </button>
            </div>
            
            <form action="https://about.google/intl/pt-BR/products/?tab=wh#all-products" target="_blank">
                <button id="google-button" type="submit"> Mais do Google </button>
            </form>
        </div> `

        for (googleImprime in formsGoogle0){
            document.querySelector('#google-in-scroll').innerHTML += `
            <div id="google-in-scroll-div">
                <a href="${formsGoogle0[googleImprime].link}" target="_blank" class="icones">  
                    <div class="icones-view" >
                    <img id="img-micro" src="${formsGoogle0[googleImprime].icone}" style="margin: 0;">
                    
                    </div>
                    <div class="icones-fundo">  </div>
                </a>
                <input value="${formsGoogle0[googleImprime].nome}" class="nameAppMicro" ></input> 
            </div> `
        }
         //Imprime altomaticamente os apps do usuário
        
        
           /*  for (imprime2 in formsGoogle0) { 
                document.querySelector('#appGoogle-user-div').innerHTML +=
                  `
                  <ul>
                  <li>
                      <a href="${formsGoogle0[imprime2].link}" target="_blank" class="icones">  
                          <div class="icones-view">
                              <img src="${formsGoogle0[imprime2].icone}">
                              <p>${formsGoogle0[imprime2].nome}</p>
                          </div>
                          <div class="icones-fundo">  </div>
                      </a> 
                  </li>
                  <li>
                      <a href="https://news.google.com/" target="_blank" class="icones">  
                          <div class="icones-view">
                              <img src="./img/icon/noticias.png">
                              <p>Notícias</p>
                          </div>
                          <div class="icones-fundo">  </div>
                      </a> 
                  </li>
                  <li>
                      <a href="https://calendar.google.com/" target="_blank" class="icones">  
                          <div class="icones-view">
                              <img src="./img/icon/agenda.png">
                              <p>Agenda</p>
                          </div>
                          <div class="icones-fundo">  </div>
                      </a> 
                  </li>
              </ul>
                  `
            } */
        
    }
}



/* ================================================ */