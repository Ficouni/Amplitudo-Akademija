var nameBoolean = false;
var emailBoolean = false;
var yearBoolean = false;
var descriptionBoolean = false; 

function checkName() {
    var x = document.getElementById('name');
    var errorVar = document.getElementById('name-msg');
    var inputValue = x.value;

    if (inputValue.length < 5) {
        errorVar.style.color = 'red';
        errorVar.style.fontSize = '15px';
        errorVar.innerHTML = 'Broj karaktera je manji od 5';
        return;
    } else if (!inputValue.includes(' ')) {
        errorVar.style.color = 'red';
        errorVar.innerHTML = 'Tekst mora da sadrzi prazan prostor';
        return;
    }
    errorVar.innerHTML = '';
    nameBoolean = true;
}

function checkEmail() {
    var x = document.getElementById('email');
    var errorVar = document.getElementById('email-msg');
    var inputValue = x.value;

    if (inputValue.length > 50){
        errorVar.style.color = 'red';
        errorVar.style.fontSize = '15px';
        errorVar.innerHTML = 'Broj karaktera je veci od 50';
        return;
    }else if (!inputValue.includes('@')) {
        errorVar.style.color = 'red';
        errorVar.style.fontSize = '15px';
        errorVar.innerHTML = 'Tekst mora da sadrzi @';
        return;
    }else if (!inputValue.includes('.com')) {
        errorVar.style.color = 'red';
        errorVar.style.fontSize = '15px';
        errorVar.innerHTML = 'Tekst mora da sadrzi .com';
        return;
    }
    errorVar.innerHTML = '';
    emailBoolean = true;
}

var currentYear = 2020;

function checkYear() {
    var x = document.getElementById('year-of-birth');
    var errorVar = document.getElementById('year-msg');
    var inputValue = x.value;
    var subtraction = currentYear - inputValue;
    var minValue = 18;

    if (subtraction < minValue) {
        errorVar.style.color = 'red';
        errorVar.style.fontSize = '15px';
        errorVar.innerHTML = 'Morate imati minimum 18 godina';
        return; 
    }
    errorVar.innerHTML = '';
    yearBoolean = true;
}

function checkDescription() {
    var x = document.getElementById('description');
    var errorVar = document.getElementById('description-msg');
    var inputValue = x.value;

    if (inputValue.length > 100) {
        errorVar.style.color = 'red';
        errorVar.style.fontSize = '15px';
        errorVar.innerHTML = 'Opis moze imati najvise 100 karaktera';
        return; 
    }
    errorVar.innerHTML = '';
    descriptionBoolean = true;
}

var button = document.getElementById('submit');
button.disabled = true;

function enableSubmit() {
    if (nameBoolean && emailBoolean && yearBoolean && descriptionBoolean) {
        button.disabled = false;
    }
}

function showData() {
    var x = document.getElementById('name');
    var name = x.value;
    var y = document.getElementById('email');
    var email = y.value;
    var z = document.getElementById('year-of-birth');
    var year = z.value;
    var p = document.getElementById('description');
    var description = p.value;
    alert('Ime je: ' + name + ', email je: ' + email + ', godina rodjenja je: ' + year + ', opis je: ' + description);
}

document.getElementById('check-button').onclick = function() {
    checkName();
    checkEmail();
    checkYear();
    checkDescription();
    enableSubmit();
}

document.getElementById('submit').onclick = function() {
    showData();
}