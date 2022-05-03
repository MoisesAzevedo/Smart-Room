

// TA TUDO SEM PONTO E VÍRGULA



function noticias(){

    document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> `
    document.querySelector('body').innerHTML += ` <button onclick="stopNews()" class="botao2">Stop News</button> `
    document.querySelector('body').innerHTML += ` <iframe src="https://www.tecmundo.com.br/" class="iframe"></iframe> `    

 //   if  (noticias() == true) {
  //      noticias() == false
  //  }
}

function noticias2(){

    document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> `
    document.querySelector('body').innerHTML += ` <button onclick="stopNews()" class="botao2">Stop News</button> `
    document.querySelector('body').innerHTML += ` <iframe src="https://www.cnnbrasil.com.br/" class="iframe"></iframe> `
    
}

function noticias3(){

    document.querySelector('head').innerHTML += ` <link rel="stylesheet" href="stopNews.css"> `
    document.querySelector('body').innerHTML += ` <button onclick="stopNews()" class="botao2">Stop News</button> `
    document.querySelector('body').innerHTML += ` <iframe src="https://www.infomoney.com.br/" class="iframe"></iframe> `
    
}

// function stopNews(){
 //  noticias() == false      //Não está dando certo
// }
