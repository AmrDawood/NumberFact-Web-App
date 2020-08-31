const inputNumber = document.getElementById("inputNumber");
const outputFact =document.querySelector("div p");
const btnYear=document.querySelector('#btngroup button:nth-child(3)');
const btnTrivia=document.querySelector('#btngroup button:nth-child(2)');
const btnMath=document.querySelector('#btngroup button:nth-child(1)');
const btnGroup =document.querySelectorAll('#btngroup button');

let targetNumberType;
let inputNumberValue;

btnGroup.forEach(btn => {
    btn.addEventListener('click',showInput);
 });


function showInput(e){
    targetNumberType =e.target.value;
    inputNumber.style.cssText="display:block !important;";
    inputNumber.value="";
    inputNumber.placeholder = `please enter your ${e.target.textContent} number`;
    inputNumber.addEventListener("input",getnumberFact);
}

function getnumberFact(){
    let httpReq =new XMLHttpRequest();
    inputNumberValue = inputNumber.value ;
    httpReq.open('GET' , `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${inputNumberValue}/${targetNumberType}`);
    httpReq.send();
    httpReq.addEventListener("readystatechange",()=>{
        if(httpReq.status == 200 && httpReq.readyState==4 && inputNumberValue!=""){
            outputFact.textContent = httpReq.response;
        }else if(inputNumberValue ==""){
            outputFact.textContent = "";
        }
    });
}