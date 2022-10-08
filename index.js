const allClearBtn = document.getElementById("allClearBtn");
const calcBtn = document.getElementById("calcBtn");
const zeroBtn = document.getElementById("zeroBtn");
const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");
const dotBtn = document.getElementById("dotBtn");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const divideBtn = document.getElementById("divideBtn");
const modulusBtn = document.getElementById("modulusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const clearBtn = document.getElementById("clearBtn");
const plusMinusBtn = document.getElementById("plusMinusBtn");
const value = document.getElementById("value");
const expression = document.getElementById("expression");
let alreadyPressed = false;
// let operatorCount = 0;

allClearBtn.addEventListener("click",()=>{

    expression.innerHTML ="";
    value.innerHTML="";
    alreadyPressed=false;
    // operatorCount=0;
//   alert(" allclearBtn button pressed.")
  
})

clearBtn.addEventListener("click",()=>{

    const leng = expression.innerHTML.length
    let text =  expression.innerHTML 
    expression.innerHTML = text.slice(0,leng-1)
    alreadyPressed=true;
    // alert("clearbtn button pressed.")
})

calcBtn.addEventListener("click",()=>{
   
    // const tempLen = expression.innerHTML.length
    // const myList = expression.innerHTML.split("+")
    // let length = myList.length
   
    // console.log("Operator count is : " + operatorCount + "\nlength is : " + length)
    if(expression.innerHTML.length == 0) 
    value.innerHTML=0
    else {
        value.innerHTML = eval(expression.innerHTML)
        // operatorCount=0
        expression.style.fontSize="20px"
        alreadyPressed=false;
    }
    // else if((tempLen > 0) && (length>operatorCount)) {
    //     alreadyPressed=false;
    //     value.innerHTML = eval(expression.innerHTML)
    //     operatorCount=0
    //     expression.style.fontSize="20px"
    // }
    // else{
    //     alert("Invalid operands")
    // }
   

   
  
    // alert(" calc button pressed.")
})

plusMinusBtn.addEventListener("click",()=>{
    alert(" plusminus button pressed.")
})

multiplyBtn.addEventListener("click",()=>{
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }

    // alert(" multiply button pressed.")
    if(!alreadyPressed){

    if(expression.innerText.length >0){
        expression.innerHTML+= "*"
        alreadyPressed = true;
        operatorCount++;
    }
   
}
})

modulusBtn.addEventListener("click",()=>{
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    if(!alreadyPressed){

    if(expression.innerText.length >0){
        expression.innerHTML+= "%"
        alreadyPressed = true;
        operatorCount++;
    }
}
    // alert(" modulus button pressed.")
})

divideBtn.addEventListener("click",()=>{
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    if(!alreadyPressed){

    if(expression.innerText.length >0){
        expression.innerHTML+= "/"
        alreadyPressed = true;
        operatorCount++;
    }
}
    // alert(" divide button pressed.")
})

minusBtn.addEventListener("click",()=>{
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    if(!alreadyPressed){

    if(expression.innerText.length >0){
        expression.innerHTML+= "-"
        alreadyPressed = true;
        operatorCount++;
    }
}
    // alert(" minus button pressed.")
})

plusBtn.addEventListener("click",()=>{
  
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    if(!alreadyPressed){

        if(expression.innerText.length >0){
            expression.innerHTML+= "+"
            alreadyPressed=true;
            operatorCount++;
        }
    }
    // alert(" plus button pressed.")
})

dotBtn.addEventListener("click",()=>{
    expression.innerHTML+= "."
    // alert(" dot button pressed.")
})

nineBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 9
    // alert("nine button pressed.")
})

eightBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 8;
    // alert(" eight button pressed.")
})

sevenBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 7
    // alert(" seven button pressed.")
})

sixBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 6
    // alert(" six button pressed.")
})

fiveBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 5
    // alert(" five button pressed.")
})

fourBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 4
    // alert(" four button pressed.")
})

threeBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 3
    // alert(" three button pressed.")
})

twoBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 2
    // alert(" two button pressed.")
})

oneBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 1
    // alert(" one button pressed.")
})

zeroBtn.addEventListener("click",()=>{
    if(alreadyPressed) alreadyPressed = false;
    if(expression.innerHTML.length >16){
        expression.style.fontSize="16px"
    }
    expression.innerHTML += 0
    // alert(" zero button pressed.")
})