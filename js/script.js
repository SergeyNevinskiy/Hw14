const num = prompt("Введите число");
const degree = prompt("Введите степень");
let numPow = 0;

function computation(num, degree = 1) {
  if ((num === null) || (degree === null)) {
    return "Отменили";
  } else if (( num.trim() === "") || (degree.trim() === "")) {
    return "Ввели пустую строку";
  }
  else if (isNaN(num) || isNaN(degree)) {
    return "Ввели не число";
  } 
  return Math.pow(+num, +degree);
}

numPow = computation(num, degree);
alert(numPow);
