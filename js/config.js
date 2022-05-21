function config(){
    if (document.querySelector('.menuConfig') != null) {
        document.querySelector('.menuConfig').remove()
    } else {
        document.querySelector('body').innerHTML +=
        `<div class="menuConfig">
            <div id="configLista">
                <p onclick="planoFundo()">Plano de fundo</p>       
            </div>
        
            <div id="configConteudo">
                <h1 id="configConteudo-h1">Congurações</h1>
            </div>
        </div>`
    }
}

var monet = [
    {
        img: `  <div class="elemento" >
                    <img src="./img/Background/Monet/1500 x788/11.jpg" onclick="fundo11()">
                </div>`
    }
]

 console.log(monet)

function planoFundo() {
    if (document.getElementById('planoFundo') != null) {
        console.log("oi")
    } else {
        document.getElementById('configConteudo-h1').remove();
        document.getElementById('configConteudo').innerHTML += 
        `
        <div id="planoFundo">
            <h1>Alterar plano de fundo</h1>

            <h2>Monet:</h2>
            <div class="imagens">

            </div>  
        </div>`;
        
        var c =0
        
        for (;; ) {
            c++; 
            if (c > 32 ) break;
            console.log(c);
            console.log('VAI');
            
            document.querySelector('.imagens').innerHTML += 
            `<div class="elemento" >
            <img src="./img/Background/Monet/1500 x788/${c}.jpg" onclick="fundo${c}()">
            </div>`;
        }
    }

}

    