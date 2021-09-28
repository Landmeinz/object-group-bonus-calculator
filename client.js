const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// // This problem is massive! Break the problem down, take small steps, and test as you go.
// // What is the fewest lines of code I can write and test to get just a little closer?

// // This is not a race. Everyone on your team should understand what is happening.
// // Ask questions when you don't.

let result = {
  name: 'placeholder',
  bonusPercentage: 0, // the bonus percentage the employee is to receive
  totalCompensation: 0, // should be the adjusted annual compensation (base annual + bonus)
  totalBonus: 0, // bonus rounded to the nearest dollar.
}

function bonusCalc(employeesIn) {

  for (let employee of employeesIn) {
    let bonusAmount = 0;
    let totalComp = 0;
    let salary = employee.annualSalary;

    bonusAmount = (salary * (percent / 100));
    totalComp = (salary + bonusAmount);
    console.log(result.name = employee.name);
    console.log(result.bonusPercentage = bonusAmount
    console.log(result.totalCompensation = totalComp
    console.log(result.totalBonus = bonusAmount);
}
  console.log('result:', result);
}
console.log(bonusCalc(employees));


function bonusPercent(rating, number, salary) {
  let maxPercent = 13;
  let percent = 0;
  if (number.length <= 4) {
    console.log('senior status; extra 5%');
    percent += 5;
  }
  if (rating <= 2) {
    return percent;
  } else if (rating === 3) {
    console.log('4% bonus');
    percent += 4;
  } else if (rating === 4) {
    console.log('6% bonus');
    percent += 6;
  } else if (rating === 5) {
    console.log('10% bonus');
    percent += 10;
  }
  if (salary >= 65000) {
    console.log('reduced by 1%');
    percent -= 1;
  }
  if (percent >= maxPercent) {
    console.log('exceeds maxPercent');

    return maxPercent
  } else {
    return percent;
  }
}

// console.log('testing bonusPercent normal guy', bonusPercent(3, '1234', 20000));
// console.log('testing bonusPercent over maximum', bonusPercent(5, '4321', 30000));
// console.log('testing bonusPercent making too much', bonusPercent(4, '79834', 100000));
// console.log(`boss' kid`, bonusPercent(1, '123456', 100000));




 //console.log('test', bonusAndTotalComp(47000, 5));