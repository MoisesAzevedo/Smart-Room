 
/* ===================================================================
      🟡  Funções dos botões menu Google (Mincrosof em: menuMicro.js)
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

function desenhaGoogle(){
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
}

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

      desenhaGoogle()
  }
}

/* ===================================================== */
                    /* userAppsGoogle */
/* ===================================================== */

/*  Abre o menu para add google apps */
function userAppsGoogle() {
    /* Remove o botão que executa essa função // Remove o menu da microsoft (senão vai ficar disponível o botão para abrir aquilo que já está aberto, criando conflitos) */
    document.querySelector('#addGoogle-button').remove();

    /* Remove o menu da micro */
    if (document.querySelector('.menuMicro')) {
        document.querySelector('.menuMicro').remove()
    }
    /* ---------------------------------------------------------- */

    document.querySelector('body').innerHTML += ` 
    <div id="menu-edit-frase-fundo" onclick="menu_edit_off()" >       <!--  menu_edit_off() está em frase.js  -->
    </div>      

    <section id="section-menuEdit-appGoogle">
        <form id="menu-edit-appGoogle" onsubmit="appsGoogle_save(event)">
          <h2>Add Google apps</h2>

          <input type="text" required id="appGoogle-nome" name="appGoogle-nome" placeholder="Nome do app">
          <input type="text" required id="appGoogle-link" name="appGoogle-link" placeholder="link do app">
          <input type="text" required id="appGoogle-icon" name="appGoogle-icon" placeholder="link do icone">
  
          <button type="submit" id="appGoogle-saveButton" > Salvar</button>
        </form> 
    </section>
    `
}

//Fecha o menu 
function userAppsGoogle_off(){
    document.getElementById('section-menuEdit-appGoogle').remove()

    /* Devolve o botão para executar a função (userAppsGoogle()) */
    document.getElementById('google-apps-scroll').innerHTML += `
    <button id="addGoogle-button" onclick="userAppsGoogle()"> Adicionar apps do Google </button>`
}

/* Adiciona novos apps */

function appsGoogle_save(e){
    e.preventDefault()
    console.log(e)
    
}