/**
 * const generatePassword = () =>{
 *      code 
 * };
 */
const dataLowercase = "abcdefghijklmnopqrstuvwxyz"
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "?.;/:!§ù%$£¨@&~#\"(=)";

function generatePassword (){
    let data = [];
    if (lowercase.checked) data.push(dataLowercase);
    if (uppercase.checked) data.push(dataUppercase);
    if (numbers.checked) data.push(dataNumbers);
    if (symbols.checked) data.push(dataSymbols);
    console.log(data);
};

generateButton.addEventListener("click", ()=>{
    generatePassword();
});
