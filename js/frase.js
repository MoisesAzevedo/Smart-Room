
function frase_save() {

    var frase = document.getElementById('frase-input').value

    
    if (frase != "")  {
    localStorage.setItem('frase', JSON.stringify(frase))
    
    frase = localStorage.getItem('frase')
    frase = JSON.parse(frase) 
    
   
    
        document.querySelector('#h1-id').remove()
        document.querySelector('.head-frase').innerHTML += 
            ` <h1 id="h1-id" onclick="fraseEdit()">${frase}</h1>
            `
    }
}

var frase = localStorage.getItem('frase')
frase = JSON.parse(frase) 
if (frase != null) {
    document.querySelector('#h1-id').remove()
    document.querySelector('.head-frase').innerHTML += 
        ` <h1 id="h1-id" onclick="fraseEdit()">${frase}</h1>
        `
}

function fraseEdit() {

    if (frase != null) { 
        document.querySelector('.head-frase').innerHTML += 
        `  <div id="menu-edit-frase-fundo" onclick="menu_edit_off()" ></div>
            <div id="menu-edit-frase">
                <h2>Editar frase</h2>
                <input type="text" required id="frase-input" placeholder="${frase}">
                <button type="submit" id="frase-button" onclick="frase_save()">Salvar</button>
            </div> 
        `
    } else { 
        document.querySelector('.head-frase').innerHTML += 
        `  <div id="menu-edit-frase-fundo" onclick="menu_edit_off()" ></div>
            <div id="menu-edit-frase">
                <h2>Editar frase</h2>
                <input type="text" required id="frase-input" placeholder="Insira a sua frase favorita">
                <button type="submit" id="frase-button" onclick="frase_save()">Salvar</button>
            </div> 
        `
    }
}


function menu_edit_off() {
    document.getElementById('menu-edit-frase-fundo').remove();

    if (document.getElementById('menu-edit-frase') != null){
        document.getElementById('menu-edit-frase').remove();
    } else if (document.getElementById('menu-edit-appGoogle') != null) {  //botão add apps do google
        userAppsGoogle_off() 
    } else if (document.getElementById('menu-homeApp') != null) {  //botão add apps no home
        homeApps_off() 
    } 
}

