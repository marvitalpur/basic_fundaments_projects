const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", function(){
    let val = input.value;
    let out = val*2.2;
    output.innerHTML = out.toFixed(2)
})


