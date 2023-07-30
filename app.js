function add(a, b){
return a+b; 


}


function subtract(a, b){
    return a-b; 
}

function multiply(a, b){
    return a*b


}

function divide(a,b){
    return a/b


}
const screen = document.querySelector(".screen"); 


let var1 = 0 
let var2 = 0 





function changeDisplay(e){
    screen.innerHTML = `${e.getAttribute('data-value')}`
}

const buttons = document.querySelectorAll('.button'); 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        changeDisplay(button);
    }); 
});
