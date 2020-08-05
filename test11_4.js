function printNumbers(from, to) {
  let current = from;
  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

var a = +prompt('Введите начальное число');
var b = +prompt('Введите конечное число');
printNumbers(a, b);