
function home_addLink() {                                       
    document.querySelector('body').innerHTML += 
        `<div id="menu-edit-frase-fundo" onclick="menu_edit_off()" >
        </div>

        <form id="menu-homeApp" onsubmit="homeAdd_save(event)">
            <h2>Inserir app</h2>
            <input type="text" required id="frase-input" name="link" placeholder="Link do site">
            <input type="text" required id="frase-input2" name="nome" placeholder="Nome do site">
            <input type="text"  id="icone" name="icone" placeholder="Link do icone (opicional)">
            <button type="submit" id="homeApp-button">Salvar</button>
        </form> `

}

/* =============================================================
                Impressão altomática
============================================================== */
/* IMPORTANTE: não está sendo utilizado mais o homeApp1[imprimt].icon, pois foi substituído por uma busca pelo fav icon */
function desenhaTabela() {
    
    var homeApp = localStorage.getItem('homeApp')
    if (homeApp != null){
        var homeApp1 = JSON.parse(homeApp)
        
        if (document.querySelector('.links p')) {               //Remove a frase (Não há links)
            document.querySelector('.links p').remove()
        }

        for (remove in homeApp) {                           // Remove tudo
            if (document.querySelector('.homeApp-user')){
                document.querySelector('.homeApp-user').remove()            
            }
        }

        for (imprime in homeApp1) {                         //Cria tudo atualizado //a estrutura a seguir se repete 2 vezes nesse arquivo, uma no desenhatabela() e outra no editapp()
            document.querySelector('.homeApp-user-div').innerHTML += 
            `<div class="homeApp-user">
                <a href="${homeApp1[imprime].link}" target="_blank" class="icones">  
                    <div class="icones-view">
                        <div class="iconeFundo-branco">
                            <img src="https://s2.googleusercontent.com/s2/favicons?domain=${homeApp1[imprime].link}">   
                        </div>
                    </div>
                    
                    <div class="icones-fundo">
                    </div>
                </a> 

                <form onsubmit="nameApp_edit(event, ${imprime})" class="nameApp-form">
                    <input value="${homeApp1[imprime].nome}" class="nameApp" name="nameApp" id="nameApp" type="text" ></input> 
                </form>

                <p class='edit-app' onclick='editApp(${imprime})'>⁝</p>
            </div>`
        }
    } else {
        var homeApp1 = []
    }
}

desenhaTabela()



/* =============================================================
                Edita nome direto no input (home)
============================================================== */
function nameApp_edit(e, impr){
    e.preventDefault()
    console.log(impr)
    console.log(e)

    var homeApp = localStorage.getItem('homeApp');
    var homeApp1 = JSON.parse(homeApp);  

    console.log(e.target.elements)

    homeApp1[impr].nome = e.target.elements['nameApp'].value;

    localStorage.setItem('homeApp', JSON.stringify(homeApp1))
    desenhaTabela()
}

/* =============================================================
                Save new app
============================================================== */

function homeAdd_save(c) {
    c.preventDefault()

    var homeApp = localStorage.getItem('homeApp')
    if (homeApp != null){
        var homeApp1 = JSON.parse(homeApp)
    } else {
        var homeApp1 = []
    }

    /* Não cria se tiver 18 */
    
    if (homeApp1.length == 18) {
        alert('Sem espaço aqui')
        return false
    } else {
        //Valor do icone
        var homeApp_icon = c.target.elements['icone'].value
        if (homeApp_icon == ''){
            var homeApp_icon = `./img/house.png`
        }   

        homeApp1.push({
            nome: c.target.elements['frase-input2'].value,
            link: c.target.elements['frase-input'].value,
            icone: homeApp_icon,
        }) 

        localStorage.setItem('homeApp', JSON.stringify(homeApp1))

        if (document.querySelector('.links p')) {               //Remove a frase (Não há links)
            document.querySelector('.links p').remove()
        }

        for (remove in homeApp) {                           // Remove tudo
            if (document.querySelector('.homeApp-user')){
                document.querySelector('.homeApp-user').remove()            
            }
        }

        desenhaTabela()
    }

}



function homeApps_off() {                               //frase.js
    document.querySelector('#menu-homeApp').remove()
}   

/* ========================================
        Edit App
======================================== */

function editApp(imp) {
    var menu_editApp =  `
    <div class="menu-editApp">
        <button id='edit-editApp' onclick="edit_editApp(${imp})">Editar</button>
        <button id='exclui-editApp' onclick="exclui_editApp(${imp})">Excluir</button>
    </div>
    
    <div id="fundo-editApp" onclick="menu_editAppRemove()"></div>`

    var homeApp = localStorage.getItem('homeApp')
    var homeApp1 = JSON.parse(homeApp)             

    for (remove in homeApp) {                           // Remove tudo
        if (document.querySelector('.homeApp-user')){
            document.querySelector('.homeApp-user').remove()            
        }
    }

    for (imprime in homeApp1) {                         //Cria tudo atualizado
        
        if (imprime == imp){            //tentando criar a condição para encontrar o array da questão.
        document.querySelector('.homeApp-user-div').innerHTML += 
            `<div class="homeApp-user">
                <a href="${homeApp1[imprime].link}" target="_blank" class="icones">  
                    <div class="icones-view">
                        <div class="iconeFundo-branco">
                            <img src="https://s2.googleusercontent.com/s2/favicons?domain=${homeApp1[imprime].link}">   
                        </div>  
                    </div>
                    <div class="icones-fundo">  </div>
                </a> 
                
                <form onsubmit="nameApp_edit(event, ${imprime})">
                    <input value="${homeApp1[imprime].nome}" class="nameApp" name="nameApp" id="nameApp" type="text" ></input> 
                </form>
                
                <p class='edit-app' onclick='editApp(${imp})'>⁝</p>
                
                ${menu_editApp}
            </div>`
        } else {
            document.querySelector('.homeApp-user-div').innerHTML += 
            `<div class="homeApp-user">
                <a href="${homeApp1[imprime].link}" target="_blank" class="icones">  
                    <div class="icones-view">
                        <div class="iconeFundo-branco">
                            <img src="https://s2.googleusercontent.com/s2/favicons?domain=${homeApp1[imprime].link}">   
                        </div>   
                    </div>
                    <div class="icones-fundo">  </div>
                </a> 

                <form onsubmit="nameApp_edit(event, ${imprime})">
                    <input value="${homeApp1[imprime].nome}" class="nameApp" name="nameApp" id="nameApp" type="text" ></input> 
                </form>
                
                <p class='edit-app' onclick='editApp(${imprime})'>⁝</p>
            </div>`
        }
    }
}


function exclui_editApp(imp2) {


    var homeApp = localStorage.getItem('homeApp')
    var homeApp1 = JSON.parse(homeApp)


    var exclui_editApp = confirm('Tem certeza que deseja excluir ' + homeApp1[imp2].nome)

    if (exclui_editApp == true){
        homeApp1.splice(imp2, 1)

        localStorage.setItem('homeApp', JSON.stringify(homeApp1))
        /* --------------------------------------------------- */

        for (remove in homeApp) {                           // Remove tudo
            if (document.querySelector('.homeApp-user')){
                document.querySelector('.homeApp-user').remove()            
            }
        }
    
        //Cria tudo atualizado 
        for (imprime in homeApp1) {   
           desenhaTabela()
        }   
    } else {
        alert(homeApp1[imp2].nome + ' intácto. (hehe)')
    }
}

function edit_editApp(imp3) {
    var homeApp = localStorage.getItem('homeApp');
    var homeApp1 = JSON.parse(homeApp); 
   
    desenhaTabela()
    document.querySelector('body').innerHTML += 
        `<div id="menu-edit-frase-fundo" onclick="menu_edit_off()" >
        </div>

        <form id="menu-homeApp" onsubmit="editSave(event, ${imp3})">
            <h2>Editar app</h2>
            <input type="text"  id="frase-input" name="link" placeholder="${homeApp1[imp3].link}" value="${homeApp1[imp3].link}" >
            <input type="text"  id="frase-input2" name="nome" placeholder="${homeApp1[imp3].nome}" value="${homeApp1[imp3].nome}" >
            <input type="text"  id="icone" name="icone" placeholder="${homeApp1[imp3].icone}" value="${homeApp1[imp3].icone}" >
            <button type="submit" id="homeApp-button">Salvar</button>
        </form> `     
}


function editSave(e, imp3) {
    e.preventDefault()
    console.log(imp3)

    var homeApp = localStorage.getItem('homeApp');
    var homeApp1 = JSON.parse(homeApp);  

    var homeApp_icon = e.target.elements['icone'].value
    if (homeApp_icon == ''){
        var homeApp_icon = homeApp1[imp3].icone
    }   

    var homeApp_nome = e.target.elements['frase-input2'].value;
    if (homeApp_nome == '') {
        var homeApp_nome = homeApp1[imp3].nome
    }
  
    var homeApp_link = e.target.elements['frase-input'].value;
    if (homeApp_link == '') {
        var homeApp_link = homeApp1[imp3].link
    }
    
    homeApp1[imp3].nome = homeApp_nome,
    homeApp1[imp3].link = homeApp_link,
    homeApp1[imp3].icone = homeApp_icon,
    

    localStorage.setItem('homeApp', JSON.stringify(homeApp1))
    desenhaTabela()
}

/* ===============================================================
    Remove o menuzinho (sem clicar em Edit ou exclui)
=============================================================== */

function menu_editAppRemove(){
    document.querySelector(".menu-editApp").remove()
    desenhaTabela()
}