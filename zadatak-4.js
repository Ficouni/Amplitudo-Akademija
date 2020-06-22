var arr = [7, 5, 8, 2, 4, 3, 9];
var niz;

function sortArr(arr){
    var len = arr.length - 1;
    var temp;
    var a;
    var b;
    for (a = 0; a < len; a++){
        for (b = 0; b < len; b++){
            if (arr[b] > arr[b+1]){
                temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
        }
    }
}

sortArr(arr);

var niz = arr.toString();

var newp = document.createElement("p");
newp.appendChild(document.createTextNode(niz));
document.body.appendChild(newp);


