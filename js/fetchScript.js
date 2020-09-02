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
    clearInputsOutput();
    inputNumber.focus();
    inputNumber.placeholder = `please enter your ${e.target.textContent} number`;
}

function getnumberFact(){
    inputNumberValue = inputNumber.value ;
    fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${inputNumberValue}/${targetNumberType}`)
    .then((response)=>{response.text()
        .then((text)=>{       
        if(inputNumberValue!=""){
            outputFact.textContent = text;
        }else if(inputNumberValue ==""){
            outputFact.textContent = "";
        }
        })
    });
}

function showDateInput(e){
    targetNumberType =e.target.value;
    inputMonth.style.cssText="display:block !important;";
    inputDay.style.cssText="display:block !important;";
    inputNumber.style.cssText="display:none !important;";
    clearInputsOutput();
    inputDay.focus();  
}

function getDateFact(){
    inputDayValue = inputDay.value ;
    inpuyMonthValue = inputMonth.value;
    fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${inpuyMonthValue}/${inputDayValue}/${targetNumberType}`)
    .then((response)=>{
        response.text()
        .then((text)=>{
            if( inpuyMonthValue!=""){
                outputFact.textContent = text;
            }else if(inputDayValue=="" || inpuyMonthValue==""){
                outputFact.textContent = "";
            }
        })
    });
}

function clearInputsOutput(){
    inputNumber.value="";
    inputDay.value="";
    inputMonth.value="";
    outputFact.textContent = "";
}
