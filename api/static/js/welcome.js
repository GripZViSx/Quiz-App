// Sleep Function (like Python)
function sleep(sec) {
 sec *= 1000;
 return new Promise(resolve => setTimeout(resolve, sec));
}

// Welcome Text
let welcomeText = document.getElementById("welcome-text");
async function welcomeTextInOut() {
 await sleep(0.5);
 welcomeText.style.opacity = 1;
 await sleep(0.2);
 welcomeText.style.textShadow = "0 0 80px var(--forth)";
 await sleep(3);
 welcomeText.style.visibility = "none";
 welcomeText.style.opacity = 0;
 await sleep(0.5)
 welcomeText.remove();
};
welcomeTextInOut();

// Incoming & Creation Of Name Entry Feild
async function inTextField() {
 await sleep(5);
 // Creating Elements
 let textField = document.createElement("div");
 let enterYourName = document.createElement("p");
 let formCreate = document.createElement("form");
 let textInput = document.createElement("input");
 let submitButton = document.createElement("button");
 // Giving them appropriate ids and functions
 textField.id = 'textField';
 enterYourName.id = "eyn"
 enterYourName.innerHTML = "Enter Your Name Below"
 formCreate.id = "formOfInput"
formCreate.autocomplete = "off";
formCreate.addEventListener('submit', submitClicked());
 textInput.id = 'textInput';
 textInput.type = "text";
 textInput.name = "textInput";
 textInput.required;
 textInput.oninput = colorReset;
 submitButton.id = 'submitButton';
 submitButton.type = "button";
 submitButton.innerHTML = "Submit"
 submitButton.onclick = submitClicked;

 // Adding to DOM
 document.body.appendChild(textField);
 textField.appendChild(enterYourName);
 textField.appendChild(formCreate);
 formCreate.appendChild(textInput);
 formCreate.appendChild(submitButton);
 // Smooth In Functionality
 await sleep(0.5)
 textField.style.opacity = 1;
 textField.style.visibility = "visible"
};
inTextField();

// Redirect To Next Page After Input
async function submitClicked() {
 local1 = document.getElementById("submitButton");
 if (document.getElementById("textInput").value.trim() != "") {
  document.getElementById("textInput").style.borderBottom = "3px solid var(--theme)";
  document.getElementById("textInput").disabled = true;
  local1.style.width = '50%';
  await sleep(0.25);
  local1.innerHTML = `Redirecting <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="mark" viewBox="0 0 24 24"><path d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>`
  local1.disabled = true;
  sessionStorage.setItem('name', document.getElementById("textInput").value.toString());
  await sleep(1);
  location.href = "/questions";
 }
 else {
  document.getElementById("textInput").style.borderBottom = "3px solid red";
  local1.style.background = 'red';
  local1.style.width = "40%";
  local1.innerHTML = `Submit <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="mark" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"/></svg>`
 }
}

function colorReset() {
 document.getElementById("textInput").style.borderBottom = "3px solid var(--forth)";
 local1 = document.getElementById("submitButton");
 local1.innerHTML = `Submit`;
 local1.style.width = "40%";
 local1.style.background = 'var(--theme)'
}