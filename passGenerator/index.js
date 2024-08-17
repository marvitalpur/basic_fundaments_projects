const lengthp = document.querySelector('#length-number');
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const number = document.querySelector("#numbers");
const symbole = document.querySelector("#symbols");
const passinput = document.querySelector("#input-pass");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");


console.log(lengthp.value);
console.log(upper.checked)
console.log(lower.checked);
console.log(number.checked);
console.log(symbole.checked);

const uppercasestr = "upperABCDEFGHIJKLMNOPQRSTUVWXYZabc";
const lowecasestr = "abcdefghijklmnopqrstuvwxyz0123";
const numberstr = "0123456789";
const symbolestr = "!@#$%^&^&*()~_+|><:?@#$%^&*()~_+|"

generate.addEventListener("click", function () {
    let str = '';

    if (upper.checked) {
        str += uppercasestr;

    }
    if (lower.checked) {
        str += lowecasestr;

    }
    if (number.checked) {
        str + numberstr
    }
    if (symbole.checked) {
        str += symbolestr;

    }
    console.log(str, "str")
    let password = '';
    for (let i = 0; i < lengthp.value; i++) {
        console.log(str.lengthp, "str.length");

        let index = Math.floor(Math.random() * str.length)
        console.log(index, "index");
        console.log("Math.random()", Math.random());
        console.log("Math.random()*str.length", Math.random() * str.length);
        console.log("Math.floor(Math.random() *str.length", Math.random() * str.length)
console.log(str[index]);
password+=str[index]
    }

    console.log(password);
    passinput.value = password;

    copy.addEventListener('click', function(){
        if(passinput.value === ''){
            alert("Please Generate Password")
        }else{
          const newele = document.createElement('textarea');
          newele.value =passinput.value;
          document.body.appendChild(newele);
          newele.select();
          document.execCommand('copy');
          alert("Please coppied to Clipboard")
        }
    })


})