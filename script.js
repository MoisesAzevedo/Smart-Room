

// TA TUDO SEM PONTO E VÍRGULA



function noticias(){

    /* document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> ` */
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" class="janela-noticia">
            <button onclick="stopNews()"  class="botao2">Stop News</button> 
            <iframe src="https://www.tecmundo.com.br/" class="iframe"></iframe> 
        </div> `    

 //   if  (noticias() == true) {
  //      noticias() == false
  //  }
}

function noticias2(){

    /* document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> ` */
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" class="janela-noticia">
            <button onclick="stopNews()" class="botao2">Stop News</button> 
            <iframe src="https://www.cnnbrasil.com.br/" class="iframe"></iframe> 
        </div> `

}

function noticias3(){

    /* document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> ` */
    document.querySelector('body').innerHTML += ` 
        <div style="width: 100%" class="janela-noticia">
            <button onclick="stopNews()"  class="botao2">Stop News</button> 
            <iframe src="https://www.infomoney.com.br/" class="iframe"></iframe> 
        </div> `

}

// function stopNews(){
 //  noticias() == false      //Não está dando certo
// }

var janelaNoticia = document.querySelector(".janela-noticia")

function stopNews(){
    console.log("oi")
}

/* var botao2 = document.querySelector(".botao2")

botao2.addEventListener("click", function(){
    console.log('olaa')
}) */

