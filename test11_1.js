var array = [0, null, NaN, 0, 1, 2, 4, "str"];
var even = 0, odd = 0, zero = 0;

function getArray(arr){
  for (var i = 0; i < arr.length; i++)
{
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
  	if (arr[i] === 0) {
  		zero++;
  	} else if (arr[i] % 2 === 0) {
  		even++;
  	} else {
  		odd++;
  	}
  }
}
console.log("кол-во чётных элементов - " + even);
console.log("кол-во нечётных элементов - " + odd);
console.log("кол-во нулей - " + zero);
}

getArray(array);