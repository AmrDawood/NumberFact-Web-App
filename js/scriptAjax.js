const inputNumber = document.getElementById("inputNumber");
const outputFact =document.querySelector("div p");
inputNumber.addEventListener("input",getnumberFact);
function getnumberFact(){
    let httpReq =new XMLHttpRequest();
    let inputNumberValue = inputNumber.value
    httpReq.open('GET' , `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${inputNumberValue}`);
    httpReq.send();
    httpReq.addEventListener("readystatechange",()=>{
        if(httpReq.status == 200 && httpReq.readyState==4 && inputNumberValue!=""){
            outputFact.textContent = httpReq.response;
        }else if(inputNumberValue ==""){
            outputFact.textContent = "";
        }
    })
}