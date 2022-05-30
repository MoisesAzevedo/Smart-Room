var homeApp = []

function home_addLink() {                                       
    
    homeApp.push({
        nome: "Agenda",
        link: "https://calendar.google.com/",
        icone: "./img/icon/Agenda.png"
    })

    for (remove in homeApp) {
        if (document.querySelector('.homeApp-user')){
            document.querySelector('.homeApp-user').remove()            
        }
    }

    for (imprime in homeApp) {
        document.querySelector('.homeApp-user-div').innerHTML += 
        `<div class="homeApp-user">
            <a href="${homeApp[imprime].link}" target="_blank" class="icones">  
                <div class="icones-view">
                    <img src="${homeApp[imprime].icone}">
                    <p>${homeApp[imprime].nome} ${imprime}</p>
                </div>
                <div class="icones-fundo">  </div>
            </a> 
        </div>`
    }
}