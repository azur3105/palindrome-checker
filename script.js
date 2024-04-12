// Getting elements from DOM
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const textInput = document.getElementById("text-input")

// Handling button click
const buttonClick = function(){
const textInput = document.getElementById("text-input").value.toLowerCase();
const cleanedText = textInput.replace(/[^a-z0-9]/g, '');
const reversedText = cleanedText.split('').reverse().join('');

// Checking if the input is as reversed (palindrom) ignoring punctuation, case, and spacing
  if(cleanedText === ''){
    alert("Please input a value");
    
    } else if(cleanedText === reversedText){
    result.style="display:block"
    result.innerHTML = `<b>${textInput}</b> is a palindrome`;
  
    } else {
    result.innerHTML = `<b>${textInput}</b> is not a palindrome`;
    result.style="display:block; border-color:#ffb0b0; background-color: #fff7f7"
    }
  }

// Listen to Click on a Check button
checkBtn.addEventListener("click", () => {
  buttonClick();  
});

// Listen to Enter key press on input field
textInput.addEventListener("keypress", (e) => {
if(e.key === 'Enter')
  buttonClick();  
});
