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


let var1 = null;
let var2 = null;
let var3 = null; 
//string value of current number variable
let currentnumstr = ""; 
let operated = false; 
let operator = ""; 
let operated2 = false; 

function changeDisplay(str){
    screen.innerHTML = currentnumstr; 
}

const nums = document.querySelectorAll('.nums'); 
nums.forEach(num => {
    num.addEventListener('click', () => {
        if(operated2){
            clearAll(); 
            operated2 = false; 
        }
        console.log(currentOpElement);
        if(currentOpElement.classList.contains('glow')){
        currentOpElement.classList.remove('glow');
        }
        currentnumstr += num.getAttribute('data-value'); 
        changeDisplay(currentnumstr);
    }); 
});

let currentOpElement = document.querySelector('.operators'); 

const equals = document.querySelector('.equals'); 
equals.addEventListener('click', () => {
    var2 = currentnumstr;
    operate(var1, var2, operator);
})

const operators = document.querySelectorAll('.operators'); 
operators.forEach(op => {
    op.addEventListener('click', () => {
        operator = op.getAttribute('data-value');
        if(operated){
            var1 = var3; 
            operated2 = false; 
        }
        else{
           var1 = currentnumstr;  
           
        }
        currentOpElement = op; 
        currentOpElement.classList.add('glow');
        currentnumstr = "";
        screen.innerHTML = ""; 
        
    })
})

function clearAll(){
var1,var2,var3 = null;
operator, currentnumstr= "";
screen.innerHTML = "";
operated = false; 


}

const clear = document.querySelector('.clear'); 
clear.addEventListener('click', clearAll )

//const equals = document.querySelector()



function operate(var1 , var2, ope){
    var1 = Number(var1); 
    var2 = Number(var2); 
    if (ope === '+') {
        var3 = add(var1, var2); 
    }
    else if (ope === '-') {
        var3 = subtract(var1, var2); 
    }
    else if (ope === '*'){
        var3 = multiply(var1, var2); 

    }
    else if (ope === '/'){
        var3 = divide(var1, var2); 
    }

    screen.innerHTML = var3;
    operated = true; 
    operated2 = true;

}
