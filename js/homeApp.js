
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
                Onsubmit / Impressão altomática
============================================================== */
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

    for (imprime in homeApp1) {                         //Cria tudo atualizado
        document.querySelector('.homeApp-user-div').innerHTML += 
        `<div class="homeApp-user">
            <a href="${homeApp1[imprime].link}" target="_blank" class="icones">  
                <div class="icones-view">
                    <img src="${homeApp1[imprime].icone}">
                    <p>${homeApp1[imprime].nome}</p>
                </div>
                <div class="icones-fundo">  </div>
            </a> 
        </div>`
    }
} else {
    var homeApp1 = []
}


function homeAdd_save(c) {
    c.preventDefault()

    var homeApp = localStorage.getItem('homeApp')
    if (homeApp != null){
        var homeApp1 = JSON.parse(homeApp)
    } else {
        var homeApp1 = []
    }

   /* inutil */ console.log(c)
    /* inutil */ console.log(homeApp1)

    //Valor do icone
    var homeApp_icon = c.target.elements['icone'].value
    if (homeApp_icon == ''){
        var homeApp_icon = `./img/house.png`
    }   
    console.log(homeApp_icon)


    homeApp1.push({
        nome: c.target.elements['frase-input2'].value,
        link: c.target.elements['frase-input'].value,
        icone: homeApp_icon,
    }) 

    localStorage.setItem('homeApp', JSON.stringify(homeApp1))

    /* inutil */ console.log(homeApp1) 

    if (document.querySelector('.links p')) {               //Remove a frase (Não há links)
        document.querySelector('.links p').remove()
    }

    for (remove in homeApp) {                           // Remove tudo
        if (document.querySelector('.homeApp-user')){
            document.querySelector('.homeApp-user').remove()            
        }
    }

    //Cria tudo atualizado 
    for (imprime in homeApp1) {   
        // impede a inclusão de 18 objetos                      
        if (imprime == 18) {
            homeApp1 = homeApp1.splice(18)
            localStorage.setItem('homeApp', JSON.stringify(homeApp1))
            alert('Ops! Não sobrou espaço, mas em breve teremos mais.')
            break
        }

        document.querySelector('.homeApp-user-div').innerHTML += 
        `<div class="homeApp-user">
            <a href="${homeApp1[imprime].link}" target="_blank" class="icones">  
                <div class="icones-view">
                    <img src="${homeApp1[imprime].icone}">
                    <p>${homeApp1[imprime].nome}</p>
                </div>
                <div class="icones-fundo">  </div>
            </a> 
        </div>`
    }

    alert(homeApp1[imprime].nome + ' adicionado.')
}



function homeApps_off() {
    document.querySelector('#menu-homeApp').remove()
}   

