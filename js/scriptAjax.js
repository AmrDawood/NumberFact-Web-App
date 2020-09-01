const inputNumber = document.getElementById("inputNumber");
const outputFact =document.querySelector("div p");
const btnGroup =document.querySelectorAll('#btngroup button');
const dateBtn  =document.getElementById('dateBtn');
const inputDay =document.getElementById('inputDay');
const inputMonth =document.getElementById('inputMonth');

let targetNumberType;
let inputNumberValue;
let inputDayValue;
let inpuyMonthValue;

btnGroup.forEach(btn => {
    btn.addEventListener('click',showInput);
 });
inputNumber.addEventListener("input",getnumberFact);
dateBtn.addEventListener('click' ,showDateInput);

inputMonth.addEventListener("input",getDateFact);
inputDay.addEventListener("input",getDateFact);


function showInput(e){
    targetNumberType =e.target.value;
    inputNumber.style.cssText="display:block !important;";
    inputMonth.style.cssText="display:none !important;";
    inputDay.style.cssText="display:none !important;";
    inputNumber.value="";
    inputDay.value="";
    inputMonth.value="";
    inputNumber.focus();
    outputFact.textContent = "";
    inputNumber.placeholder = `please enter your ${e.target.textContent} number`;
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

function showDateInput(e){
    targetNumberType =e.target.value;
    inputMonth.style.cssText="display:block !important;";
    inputDay.style.cssText="display:block !important;";
    inputNumber.style.cssText="display:none !important;";
    inputNumber.value="";
    inputDay.focus();
    outputFact.textContent = "";
}

function getDateFact(){
    let httpReq =new XMLHttpRequest();
    inputDayValue = inputDay.value ;
    inpuyMonthValue = inputMonth.value;
    httpReq.open('GET' , `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${inpuyMonthValue}/${inputDayValue}/${targetNumberType}`);
    httpReq.send();
    httpReq.addEventListener("readystatechange",()=>{
        if(httpReq.status == 200 && httpReq.readyState==4 && inputDayValue!="" && inpuyMonthValue!=""){
            outputFact.textContent = httpReq.response;
        }else if(inputDayValue=="" || inpuyMonthValue==""){
            outputFact.textContent = "";
        }
    });
}