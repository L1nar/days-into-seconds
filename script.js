let input = document.querySelector('#input');
let convert = document.querySelector('#convert');
let output = document.querySelector('#output');

convert.addEventListener('click', function () {
    let day = Number(input.value);
    let sec = day * 86400;
    output.value = sec;
});