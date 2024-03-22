'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const dispMes = function (startguess) {
  document.querySelector('.startguess').textContent = startguess;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.txt').value);
  if (!guess) {
    dispMes('⛔ No Number ! ');
  } else if (guess === number) {
    dispMes('✅ You guessed  the Correct Number ! ');
    document.querySelector('.ques').textContent = number;
    alert('Congrats 🎉');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.sp1').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      dispMes(guess > number ? '📈 Too High ! ' : '📈 Too Low ! ');
      score--;
      document.querySelector('.sp').textContent = score;
    } else {
      dispMes('🚫You Lose the Game ! ');
      document.querySelector('.sp').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  dispMes('Start Guessing.. ');
  document.querySelector('.sp').textContent = score;
  document.querySelector('.ques').textContent = '?';
  document.querySelector('.txt').value = ' ';
});
/*const obje = {
  firstname: 'eshe',
  last: 'getch',
  age: 22,
  job: 'coder',
  hasaDriverLicense: true,
  friends: ['a', 'b'],
  calAge: function () {
    this.newVariable = 29 - this.age;
    return this.newVariable;
  },
  getSummary: function () {
    return `I am ${this.firstname} a ${
      this.age
    } years old currently working as a ${this.job}, also has ${
      this.hasaDriverLicense ? 'a' : 'no'
    } Driver License`;
  },
};
console.log(obje.calAge());
console.log(obje.newVariable);
console.log(obje.getSummary());
const mark = {
  fullname: 'mark miller',
  mass: 78,
  height: 1.69,
  markclacBMI: function () {
    this.var1 = this.mass / (this.height * this.height);
    return this.var;
  },
};
const john = {
  fullname: 'john smith',
  mass: 92,
  height: 1.95,
  johnclacBMI: function () {
    this.var2 = this.mass / (this.height * this.height);
    return this.var;
  },
};
mark.markclacBMI();
john.johnclacBMI();
if (mark.var1 > john.var2) {
  console.log(
    `mark's BMI(${mark.var1}) is higher than john's BMI (${john.var2})`
  );
} else if (john.var2 > mark.var1) {
  console.log(
    `john's BMI(${john.var2}) is higher than mark's BMI (${mark.var1})`
  );
} else {
  console.log('no  one is higer !');
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled ${dice} times`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log('Iteration ends here!');
  }
}
const calcBill = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
};
const billss = [2, 3, 4, 5, 6];
const tipss = [];
const totalss = [];

for (let i = 0; i < billss.length; i++) {
  const tip = calcBill(billss[i]);
  tipss.push(tip);
  totalss.push(tip + billss[i]);
}
console.log(billss, tipss, totalss);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAvg([2, 3, 4]));

const sth = () => {
  // arrow fUNCTION
  return 5 + 6;
};
console.log(`ARROW FUN:- ${sth()}`);

const sthi = function () {
  return 8 + 9;
};
console.log(`Fun Expression:- ${sthi()}`);

function sthii() {
  return 9 + 10;
}
console.log(`Fun Definition:- ${sthii()}`);

const temp = [8, 100, 3, 4, 90, 2, 87, 'error'];
function calcTempAmp(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    if (typeof a != 'number') continue;
    if (a > max) max = a;

    if (a < min) min = a;
  }

  console.log(`Max number is ${max}, Min number is ${min}`);
  return max - min;
}
console.log(`calcAmplitude is ${calcTempAmp([4, 80, 1, 700, 800, 0])}`);
console.log(`calcAmplitude is ${calcTempAmp(temp)}`);
*/
/*const data1 = [17, 21, 23];
function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} days...`;
  }
  console.log(str);
}
printForecast(data1);
*/
