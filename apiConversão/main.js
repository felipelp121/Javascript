let url = " https://api.exchangeratesapi.io/latest";

function conversao(){
    var cota = null;
    

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        cota = data.rates.BRL;
        
        valor = document.getElementById("valor");
        
        valorRecebido =  valor.value;
        
        texto = document.getElementById("resultado");
        texto.innerHTML = valorRecebido * cota;
    })

}

