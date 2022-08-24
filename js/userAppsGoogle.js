var imprime = null  //para acabar com um erre de não encontrar esse variavel

/* ====================================================================
            Abre o menu para add google apps
==================================================================== */
function userAppsGoogle() {  
  document.querySelector('body').innerHTML +=
    ` <div id="menu-edit-frase-fundo" onclick="menu_edit_off()" >       <!--  menu_edit_off() está em frase.js  -->
      </div>      
      <section id="section-menuEdit-appGoogle">
        <form id="menu-edit-appGoogle" onsubmit="appsGoogle_save(event)">
          <h2>Add Google apps</h2>
          <input type="text" required id="appGoogle-nome" name="appGoogle-nome" placeholder="Nome do app">
          <input type="text" required id="appGoogle-link" name="appGoogle-link" placeholder="link do app">
          <input type="text" required id="appGoogle-icon" name="appGoogle-icon" placeholder="link do icone">
  
          <input type="submit" id="appGoogle-saveButton" value="Salvar"> 
        </form> 
    
        <section>
          <a href="https://about.google/intl/pt-BR/products/?tab=wh#all-products" target="_blank">
            <button id="appsGoogle-button" type="submit"> Mais do Google </button>
          </a>
        </section>
      </section>
    `
}

//Fecha o menu 
function userAppsGoogle_off(){
    document.getElementById('section-menuEdit-appGoogle').remove()
}

 
/*====================================================================
            Local Storage
==================================================================== */

/* var formsGoogle = localStorage.getItem('formsGoogle')
if (formsGoogle != null){
  var formsGoogle0 = JSON.parse(formsGoogle)
} else {
  var formsGoogle0 = []
}


function appsGoogle_save(e){
  e.preventDefault(); */

  /* -------------------------- <Envia para o localStorage> -------------------------- */
/*   var formsGoogle = localStorage.getItem('formsGoogle')
  if (formsGoogle != null){
    var formsGoogle0 = JSON.parse(formsGoogle)
  } else {
    var formsGoogle0 = []
  }

  formsGoogle0.push({
    icone: e.target.elements['appGoogle-icon'].value,
    link: e.target.elements['appGoogle-link'].value,
    nome: e.target.elements['appGoogle-nome'].value
  })

  console.log(formsGoogle0)

  localStorage.setItem('formsGoogle', JSON.stringify(formsGoogle0)) */
  
  /* -------------------------- </Envia para o localStorage> -------------------------- */

  /* ------------------------------- <imprime na tela> -------------------------------- */
/*   
  for (imprime in formsGoogle0) { 
    document.querySelector('#appGoogle-user-div').innerHTML +=
      `
      <ul>
      <li>
          <a href="${formsGoogle0[imprime].link}" target="_blank" class="icones">  
              <div class="icones-view">
                  <img src="${formsGoogle0[imprime].icone}">
                  <p>${formsGoogle0[imprime].nome}</p>
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
} */

/* ============================================================================
          função para chamar no script.js (script.js não estava encontrando o  imprime. Aparentemente, a variável desenhaGoogle é quem está criando a essecomunicação)
============================================================================ */

/* function desenha_google(){
  
  for (imprime in formsGoogle0) { 
    if (document.getElementById('appGoogle-user-div')){

      document.querySelector('#appGoogle-user-div').innerHTML +=
      `
        <ul>
          <li>
              <a href="${formsGoogle0[imprime].link}" target="_blank" class="icones">  
                  <div class="icones-view">
                      <img src="${formsGoogle0[imprime].icone}">
                      <p>${formsGoogle0[imprime].nome}</p>
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

var desenhaGoogle = desenha_google() */
/* ========================================
=========================================== */