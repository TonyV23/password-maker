/**
 * const generatePassword = () =>{
 *      code 
 * };
 */
const dataLowercase = "abcdefghijklmnopqrstuvwxyz"
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "?.;/:!§ù%$£¨@&~#\"(=)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword (){
    let data = [];
    let passwordGenearated = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);
    if (data.length ===0) {alert("You must choose one of conditions'password generation"); return;}
    
    for (i = 0; i < rangeValue.value; ++i) {
        passwordGenearated += (data[Math.floor(Math.random() * data.length)]);     
    }
    passwordOutput.value = passwordGenearated;

    //to copy the generated code to clipboard
    passwordOutput.select();
    document.execCommand("copy");
    generateButton.textContent = "password copied to clipboard";
    setTimeout(() => {
        generateButton.textContent = "Generate a password";
    }, 3000);
    
};

generateButton.addEventListener("click", ()=>{
    generatePassword();
});
