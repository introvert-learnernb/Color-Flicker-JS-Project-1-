const hex = [0, 1, 2, 3, 4, 5 ,6 , 7 , 8, 9 , "A", "B", "C", "D", "E", "F"];


const btn = document.querySelector('.btn');
const colorCode = document.getElementById('colorcode');



btn.addEventListener('click', ()=>{
    let hexCode = '#';
    for (let i = 0; i < 6 ; i++){
        hexCode += hex[randomNumberGenerator()];
    }
    colorCode.textContent = hexCode;
    document.body.style.backgroundColor = colorCode.textContent;
})

function randomNumberGenerator(){
    return Math.floor(Math.random() * hex.length);
}