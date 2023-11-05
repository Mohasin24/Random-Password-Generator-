const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{[]}/?|"
const passwordLen = 12;

const allChar = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)] + lowerCase[Math.floor(Math.random() * lowerCase.length)] + numbers[Math.floor(Math.random() * numbers.length)] + symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length<passwordLen)
    {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passwordBox.value = password;
}

copyBtn.addEventListener("click", ()=> {

        if (passwordBox.value !== '') {
            passwordBox.select();
            navigator.clipboard.writeText(passwordBox.value);
            passwordBox.value = "Copied!";

        } else {
            alert("Please generate the password!");
        }

    })
