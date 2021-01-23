const texto1 = "Efeito de Maquina de Escrever é bem legal!";
const texto2 = "É muito legal aprender javascript!!!";
function escrever1 (){

    let maquina = document.getElementById('maquina');
    
    let escrita1 = setInterval(() => {
        maquina.innerHTML += texto1[i];
        i++;
        if (i == texto1.length + 1){
            clearInterval(escrita1);
            maquina.innerHTML = "";
            i= 0;
            escrever2();
        }
    },250);
};

function escrever2 (){
    escrita2 = setInterval(() => {
        maquina.innerHTML += texto2[i];
        i++;
        if (i == texto2.length + 1){
            clearInterval(escrita2);
            maquina.innerHTML = "";
            i = 0;
            escrever1();
        }
    }, 250);

};


let i = 0;

escrever1();