//dynamic form
document.getElementById('producttype').onchange = function() {
  document.querySelectorAll('.dynamic_form form').forEach(function(e) {
  e.style.display = 'none';
  });
  document.getElementById(this.value).style.display = "block";};

//form validation

//input fields
const sku = document.getElementById("sku");
const name = document.getElementById("name");
const price = document.getElementById("price");
const size = document.getElementById("size");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const width = document.getElementById("width");
const length = document.getElementById("length");

//form
const formMain = document.getElementById("formMain");
const formDVD = document.getElementById("formDVD");
const formBook = document.getElementById("formBook");
const formFurniture = document.getElementById("formFurniture");

// validating colors
const green = "#4CAF50"; //green color of valid input
const red = "#F44336"; //red color of invalid input

//every input validation
function validateSKU(){
  //check if is empty
  if(checkIfEmpty(sku)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(sku)) return;
  return true;
}
function validateName(){
  //check if is empty
  if(checkIfEmpty(name)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(name)) return;
  return true;
}
function validatePrice() {
  // check if is empty
  if (checkIfEmpty(price)) return;
  // is if it has only letters
  if (!checkIfOnlyNumbers(price)) return;
  return true;
}

function validateSize(){
  //check if is empty
  if(checkIfEmpty(size)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(sku)) return;
  return true;
}
function validateWeight(){
  //check if is empty
  if(checkIfEmpty(weight)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(weight)) return;
  return true;
}
function validateHeight(){
  //check if is empty
  if(checkIfEmpty(height)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(height)) return;
  return true;
}
function validateWidth(){
  //check if is empty
  if(checkIfEmpty(width)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(width)) return;
  return true;
}
function validateLength(){
  //check if is empty
  if(checkIfEmpty(length)) return;
  //is if it has only letters
  if(!checkIfOnlyLetters(length)) return;
  return true;
}

function checkIfEmpty(field){
  if(isEmpty(field.value.trim())){
    //set field invalid
    setInvalid(field,`${field.name} must not be empty`);
    return true;
  } else {
    //set field valid
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  if(value === "") return true;
  return false;
}

function isNumber(value) {
  if(value !== isNaN ) return true;
  return false;
}

function setInvalid (field, message){
  field.className = "invalid";
  field.nextElementSibling.innerHTML = message;//error message
  field.nextElementSibling.style.color = red;//red color of error field
}

function setValid (field){
  field.className = "valid";
  field.nextElementSibling.innerHTML = "";//error message
  //field.nextElementSibling.style.color = green;//green color of ok field
}

function checkIfOnlyLetters() {
  if(/^[a-zA-Z ]+$/.test(field.value)){
    setValid(field);
    return true;
  } else{
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}

function checkIfOnlyNumbers() {
  if(/^[0-9 ]+$/.test(field.value)){
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} must contain only numbers`);
    return false;
  }
} 
 
