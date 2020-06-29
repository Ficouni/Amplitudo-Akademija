document.querySelector('.slider').addEventListener('click', function() {
    const body = document.querySelector('body');
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
})

function rangeColor() {
    const range = document.getElementById('new-range');
    const body = document.querySelector('body');
    var value = range.value;
    if (value == 0) {
        body.style.backgroundColor = '#f3f3f7';
    } else if (value == 1) {
        body.style.backgroundColor = '#dddbe7';
    } else if (value == 2) {
        body.style.backgroundColor = '#b3b1bf';
    } else {
        body.style.backgroundColor = '#2b2b2c';
    }
}