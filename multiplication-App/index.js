const score = document.querySelectorAll('#score');
const num1 = Number(document.querySelector("#num1").textContent.trim());
const num2 = Number(document.querySelector('#num2').textContent.trim());
const input = document.querySelector("#input").value;
const submit= document.querySelector("#submit");


let count = 0;
submit.addEventListener('click', function(){
    let val = input.value;
    // val = val.trim();
    val = Number(val)
    if(document.querySelector("#submit").value === ''){
        alert("Please enter a number");
    }else if (val === num1*num2){
        console.log("inside if");
        count ++;
        score.textContent = count;
        num1.te
    }else {
        
    }

})