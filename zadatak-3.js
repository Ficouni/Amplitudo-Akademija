function divideSentence() {
    var x = document.getElementById('text');
    var sentence = x.value;
    var i;
    var divided = sentence.split(' ');
    for (i = divided.length - 1; i >= 0; i--){
        console.log(divided[i]);
    }
}


document.getElementById('btn').onclick = function() {
    divideSentence();
}