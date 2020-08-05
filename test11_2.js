var x = prompt('Введите число: ');

function primeNumber(num) {
  if (num > 1000) {
    console.log('Данные не верны!')
  } else if (num !=0 && num!=1 && num % 2 !== 0){
    console.log(num+' является простым числом');
  } else {
    console.log(num+' не простое число');
  }
}

primeNumber(x);