

// TA TUDO SEM PONTO E VÍRGULA


/* ======================================
        Funções: iframes de noticias
====================================== */
function noticias(){
    //Remove o button Principais Noticias
              
   
    //remove o iframe (se tiver algum ifreme ja aberto)
    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    } 
   
    //imprime o novo iframe 
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
            <iframe src="https://www.tecmundo.com.br/" class="iframe"></iframe> 
        </div> `    
}

function noticias2(){
   

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()" class="botao2">Encerrar Noticias</button> 
            <iframe src="https://www.cnnbrasil.com.br/" class="iframe"></iframe> 
        </div> `
}

function noticias3(){
    

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
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
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
            <iframe src="https://www.techradar.com/" class="iframe"></iframe> 
        </div> `    
}

function noticiasB(){
    

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()" class="botao2">Encerrar Noticias</button> 
            <iframe src="https://www.bundle.app/en/breakingNews" class="iframe"></iframe> 
        </div> `
}

function noticiasC(){
    
    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
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
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
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
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
            <iframe src="https://www.suno.com.br/artigos/" class="iframe"></iframe> 
        </div> `
}

//============= função do botão Encerrar Noticias =========== 
function encerrarNews(){  
    document.querySelector('#janela-noticia').remove();
}

/* ======================================
        Funções dos botões menu
====================================== */

//Google:
function google(){
    if (document.querySelector('.menu') != null ){
        document.querySelector('.menu').remove();
    } else {
        document.querySelector('body').innerHTML += `
       <div class="menu">
            <div id="google-apps-scroll">
                <ul>
                    <li>
                        <a href="https://docs.google.com/" target="_blank" class="icones" >  
                            <div class="icones-view">
                                <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png">
                                <p>Documentos</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li >

                    <li>
                        <a href="https://keep.google.com/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png">
                                <p>Keep</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>

                    <li>
                        <a href="https://docs.google.com/spreadsheets/u/0/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png">
                                <p>Planilhas</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                </ul>
            
                <!--============================= linha 2 ============================= ================================ -->
                <!--============================= linha 2 ============================= ================================ -->
                <ul>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="./img/icon/youtube.png">
                                <p>Youtube</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                    <li>
                        <a href="https://drive.google.com/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">
                                <p>Drive</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                    <li>
                        <a href="https://mail.google.com/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="./img/icon/gmail.png">
                                <p>Gmail</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                </ul>

                <!--============================= linha 3 ============================= ================================ -->
                <!--============================= linha 3 ============================= ================================ -->
                <ul>
                    <li>
                        <a href="https://photos.google.com/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="./img/icon/fotos.png">
                                <p>Fotos</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.google.com.br/maps" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="https://cdn-icons-png.flaticon.com/512/2642/2642502.png">
                                <p>Maps</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                    <li>
                        <a href="https://meet.google.com/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="./img/icon/meet.png">
                                <p>Meet</p>
                            </div>
                            <div class="icones-fundo">  </div>
                        </a> 
                    </li>
                </ul>

                <!--============================= linha 4 ============================= ================================ -->
                <!--============================= linha 4 ============================= ================================ -->
                <ul>
                    <li>
                        <a href="https://translate.google.com.br/" target="_blank" class="icones">  
                            <div class="icones-view">
                                <img src="./img/icon/tradutor.png">
                                <p>Tradutor</p>
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
                
                <div id="appGoogle-user-div" style="padding: 0;"> 
            
                </div>
                
                <button id="addGoogle-button" onclick="userAppsGoogle()"> Adicionar apps do Google </button>
            </div>

        <form action="https://about.google/intl/pt-BR/products/?tab=wh#all-products" target="_blank">
            <button id="google-button" type="submit"> Mais do Google </button>
        </form>
        
        `
        //Imprime altomaticamente os apps do usuário
        
        
            for (imprime2 in formsGoogle0) { 
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
            }
        
    }
}



/* ================================================ */