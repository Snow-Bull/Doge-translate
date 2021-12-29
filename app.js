var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate");

var URl = "https://api.funtranslations.com/translate/doge.json";

function newURL(text) {
    return URl + "?" + "text=" + text
}
function errorHandler(error){
    console.log("Error Occured", error);
    alert ("Something is wrong with server!!! Please Try Again Later...")
};

function afterclick() {
    var input = txtInput.value;
    console.log(input)
    fetch(newURL(input))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated;
            txtOutput.innerText = outputText;
        })
        .catch(errorHandler)

};
btnTranslate.addEventListener("click", afterclick);
