const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{[]}/?|"

const allChar = upperCase + lowerCase + numbers + symbols;

function generatePassword()
{   
    let password = "";
    
    password += upperCase[Math.floor(Math.random() * upperCase.length)] 
                    + lowerCase[Math.floor(Math.random() * lowerCase.length)]
                    + numbers[Math.floor(Math.random() * numbers.length)]
                    + symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length<12)
    {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passwordBox.value = password;
}

copyBtn.addEventListener("click", ()=>{
    console.log(passwordBox.value)
    if(passwordBox.value !== '')
    {
        passwordBox.select();
        document.execCommand("copy");
        passwordBox.value = "Copied!";
    }
    else{
        alert("Please generate the password!");
    }
    
})
