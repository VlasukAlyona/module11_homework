function example(num1) {
  
  function func(num2){
    console.log(num1+num2);
  }
  
  func(2);
}

example(3);

// Не совсем верно понято задание. Функция должна возвращать функцию, а у вас в примере одна функция объявлена внутри другой. Кроме того, второй аргумент (число 2) задается внутри функции, что тоже не правильно. Должна быть возможность использовать функцию с любыми аргументами, не меняя её код. Ниже верный вариант решения:

function getSumFunction(a) {
  return function(b) {
  	return a + b;
  }
};

const sumFunction = getSumFunction(2);

const sum = sumFunction(3)

console.log(sum); // 5