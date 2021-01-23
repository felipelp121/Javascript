const X = "<img src='./images/x.png'>";
const O = "<img src='./images/o.png'>"; 

function createBoard(){
    let container = document.createElement('section')
    container.setAttribute("id", "container");
    
    document.body.appendChild(container);
    
    for(let i=0; i<9 ; i++){
        
        let square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute("id", i);
        square.addEventListener('click', jogada);
        document.getElementById("container").appendChild(square); 
    };   
};

function jogada(){
    if(jogadas % 2 == 0){
        this.innerHTML = O;
        o.push(parseInt(this.id));
        validade(o);
    }else{
        this.innerHTML = X;
        x.push(parseInt(this.id));
        validade(x);
        console.log(x);
    }
    jogadas++;
    
};

function validade(z){
   if (jogadas >= 3){
        acerto.forEach((certo) => {
            if (certo[0] == z[0] | certo[0] == z[1] | certo[0] == z[2]){
                if (certo[1] == z[0] | certo[1] == z[1] | certo[1] == z[2]){
                    if (certo[2] == z[0] | certo[2] == z[1] | certo[2] == z[2]){
                        document.getElementById("hidden").style.display = "flex";
                    }  
                }  
            }  
          
        })
    }    
};

let acerto = [
    
    [0, 3, 6],
    [1 , 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]

];
let o = [];
let x = [];
let jogadas = 0;
createBoard();

function restart(){
    window.location.reload();
};
