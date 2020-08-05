
//Вариант без стрелочной функции

/*function power(num, pow){
  var result = Math.pow(num,pow);
  console.log(num+' в степени '+pow+' равняется '+result);
}

power(3, 2);*/

//Вариант Arrow Function

const power = (num, pow) => {
  var result = Math.pow(num,pow);
  console.log(num+' в степени '+pow+' равняется '+result);
};

power(3, 2);