function fraseEdit() {
    document.querySelector('.head').innerHTML += 
    `  <div id="menu-edit-frase-fundo"></div>
        <div id="menu-edit-frase">
            <h2>Editar frase</h2>
            <input type="text" required id="frase-input" placeholder="Insira a sua frase favorita">
            <button type="submit" id="frase-button" onclick="fraseFunction()">Salvar</button>
        </div> 
    `
    }

function fraseFunction() {
    
}