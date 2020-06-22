function calculateDays(){
    var x = document.getElementById('number');
    var value = x.value;
    var days = value * 365;
    alert(days);
}

document.getElementById('btn').onclick = function() {
    calculateDays();
}