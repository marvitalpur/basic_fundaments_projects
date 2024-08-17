const textarea = document.querySelector('#textarea');
const button = document.querySelector('#count');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    if (textarea.value === '') {
        output.innerHTML = "Please Enter your text"; // Corrected typo in the message
    } else {
        const val = textarea.value.toLowerCase(); // Ensure the text is in lowercase
        let count = 0;
        for (let i = 0; i < val.length; i++) {
            // Removed the extraneous semicolon
            if (val[i] === "a" || val[i] === "i" || val[i] === "e" || val[i] === "o" || val[i] === "u") {
                count++;
            }
        }
        output.innerHTML = `Number of vowels: ${count}`;
    }
});