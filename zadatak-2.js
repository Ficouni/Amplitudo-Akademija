var max = 0;
var arr = [6,5,7,8,1,2,3];

function arrayMaxElement(arr) {
    var len = arr.length;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    console.log('Najveci element je: ' + max);
  }
function elementPosition(arr){
    var i;
    for (i = 0; i < arr.length; i++){
        if (max == arr[i]){
            console.log('Pozicija je: ' + i);
        }
    }
}

document.getElementById('btn').onclick = function() {
    arrayMaxElement(arr);
    elementPosition(arr);
}