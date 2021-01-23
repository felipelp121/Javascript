
let image1 = document.getElementById('1');
let image2 = document.getElementById('2');
let image3 = document.getElementById('3');
let carrosel = [image1, image2, image3];
let pos = 0;
timeCarrosel = setInterval(() => {
    if (pos == 0){
        carrosel[2].style.display = 'none';
    }
    if (carrosel[pos - 1]){
        carrosel[pos-1].style.display = 'none';
        
    }
    carrosel[pos].style.display = 'block';
    pos++;
    if (pos > 2){
        pos = 0;
        

    };

}, 2000);