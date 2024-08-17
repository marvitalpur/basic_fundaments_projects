const inputfiled = document.getElementById("#password");
const outputfield = document.getElementById("#output");

inputfiled.addEventListener('input', function(){

console.log(inputfiled.value)

    let password = inputfiled.value;
    if (password.length < 8) {
        outputfiled.innertext = "Password is too short ";
        outputfiled.style.color = "red"
    } else { 
        console.log("is lowercase ", password.search(/[a-z]/) == -1)
        if (password.search(/[a-z]/) == -1) {
            outputfiled.innertext = "password is missing a lowercase letter"
            outputfield.style.color = "red"
        } else if (password.search(/[A-Z]/) == -1) {
            outputfiled.inntertext = "password is missing Upper case letter ";
        } else if (password.search(/[0-9]/) == -1) {
            outputfield.innertext = "password is missing numeric letter ";
            outputfield.style.color = "red";
        } else if (password.search(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)== -1){
            outputfield.innertext= "Password is missing special letter";
            outputfield.style.color="red"
        }
        else {
            outputfield.inntertext = "password is strong "
            outputfield.style.color="green"
        }

    }
}
)