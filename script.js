

// TA TUDO SEM PONTO E VÍRGULA


/* ======================================
        Funções: iframes de noticias
====================================== */
function noticias(){
    //Remove o button Principais Noticias
    if (document.getElementById('button-principais') != null){
        document.querySelector('#button-principais').remove();
    }            
   
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
    if (document.getElementById('button-principais') != null){
        document.querySelector('#button-principais').remove();
    }

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
    if (document.getElementById('button-principais') != null){
        document.querySelector('#button-principais').remove();
    }

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
    if (document.getElementById('button-principais') != null){
        document.querySelector('#button-principais').remove();
    }            
   
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
    if (document.getElementById('button-principais') != null){
        document.querySelector('#button-principais').remove();
    }

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
    if (document.getElementById('button-principais') != null){
        document.querySelector('#button-principais').remove();
    }

    if (document.querySelector('#janela-noticia') != null) {
        document.querySelector('#janela-noticia').remove();
    }

    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
            <iframe src="https://startups.com.br/noticias/" class="iframe"></iframe> 
        </div> `
}

/* ======================= Principais noticias (bing) ============ */
function principais_noticias(){
    document.querySelector('#button-principais').remove();
    
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" id="janela-noticia">
            <button onclick="encerrarNews()"  class="botao2">Encerrar Noticias</button> 
            <iframe src="https://www.bing.com/news/search?q=Brasil&nvaug=%5bNewsVertical+Category%3d%22rt_Brazil%22%5d&FORM=NSBABR" class="iframe"></iframe> 
        </div> `
}

//============= função do botão Encerrar Noticias =========== 
function encerrarNews(){  
    document.querySelector('#janela-noticia').remove();
    
    document.getElementById('ancora-principais').innerHTML += 
        ` <button onclick="principais_noticias()" id="button-principais">
             <h1> Principais Noticias </h1>
          </button> `
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
        <ul class="menu" >
            <li>
                <a href="https://docs.google.com/" target="_blank" class="icones">  
                    <div class="icones-view">
                        <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png">
                        <p>Documentos</p>
                    </div>
                    <div class="icones-fundo">  </div>
                </a> 
            </li>

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

            <li>
                <a href="https://www.youtube.com/" target="_blank" class="icones">  
                    <div class="icones-view">
                        <img src="./img/icon/youtube.png">
                        <p>Youtube</p>
                    </div>
                    <div class="icones-fundo">  </div>
                </a> 
            </li>

            <form action="https://about.google/intl/pt-BR/products/?tab=wh#all-products" target="_blank">
                <button id="google-button" type="submit"> Mais do Google </button>
            </form>
        </ul>
        `
    }
}

//Microsoft
function micro(){
    if (document.querySelector('.menuMicro') != null ){
        document.querySelector('.menuMicro').remove();
    } else {
        document.querySelector('body').innerHTML += `
        <div class="menuMicro" >
            <a href="https://www.office.com/launch/excel?auth=1" target="_blank" class="icones">  
                <div class="icones-view" >
                    <img id="img-micro" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMjAgMkg5LjMzM0ExLjMzMyAxLjMzMyAwIDAwOCAzLjMzM1Y5bDEyIDcgNiAyLjUzMkwzMiAxNlY5eiIgZmlsbD0iIzIxYTM2NiIvPjxwYXRoIGZpbGw9IiMxMDdjNDEiIGQ9Ik04IDloMTJ2N0g4eiIvPjxwYXRoIGQ9Ik0zMC42NjcgMkgyMHY3aDEyVjMuMzMzQTEuMzMzIDEuMzMzIDAgMDAzMC42NjcgMnoiIGZpbGw9IiMzM2M0ODEiLz48cGF0aCBkPSJNMjAgMTZIOHYxMi42NjdBMS4zMzMgMS4zMzMgMCAwMDkuMzMzIDMwaDIxLjMzNEExLjMzMyAxLjMzMyAwIDAwMzIgMjguNjY3VjIzeiIgZmlsbD0iIzE4NWMzNyIvPjxwYXRoIGZpbGw9IiMxMDdjNDEiIGQ9Ik0yMCAxNmgxMnY3SDIweiIvPjxwYXRoIGQ9Ik0xNi42NjcgN0g4djE5aDguNjY3QTEuMzM3IDEuMzM3IDAgMDAxOCAyNC42NjdWOC4zMzNBMS4zMzcgMS4zMzcgMCAwMDE2LjY2NyA3eiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTUuNjY3IDhIOHYxOWg3LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTcgMjUuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNS42NjcgOHoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE1LjY2NyA4SDh2MTdoNy42NjdBMS4zMzcgMS4zMzcgMCAwMDE3IDIzLjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDh6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xNC42NjcgOEg4djE3aDYuNjY3QTEuMzM3IDEuMzM3IDAgMDAxNiAyMy42NjdWOS4zMzNBMS4zMzcgMS4zMzcgMCAwMDE0LjY2NyA4eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkYXRhLW5hbWU9IkJhY2sgUGxhdGUiIGQ9Ik0xLjMzMyA4aDEzLjMzNEExLjMzMyAxLjMzMyAwIDAxMTYgOS4zMzN2MTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNC42NjcgMjRIMS4zMzNBMS4zMzMgMS4zMzMgMCAwMTAgMjIuNjY3VjkuMzMzQTEuMzMzIDEuMzMzIDAgMDExLjMzMyA4eiIgZmlsbD0iIzEwN2M0MSIvPjxwYXRoIGQ9Ik0zLjUzMyAyMWwzLjIzNi01LjAxNEwzLjgwNSAxMUg2LjE5bDEuNjE4IDMuMTg3cS4yMjMuNDUzLjMwNy42NzZoLjAyMXEuMTYtLjM2Mi4zMzUtLjcwNEwxMC4yIDExaDIuMTg5bC0zLjA0IDQuOTU4TDEyLjQ2NiAyMWgtMi4zM2wtMS44NjktMy41YTIuOTIyIDIuOTIyIDAgMDEtLjIyMy0uNDY4aC0uMDI4YTIuMjA3IDIuMjA3IDAgMDEtLjIxNi40NTNMNS44NzcgMjF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjwvZz48L3N2Zz4=">
                    <p>Excel</p>
                </div>
                <div class="icones-fundo">  </div>
            </a> 
        </div>
        `
    }
}
/* ================================================ */