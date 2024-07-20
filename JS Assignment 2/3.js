// You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
//     If 500000 >= salary > 0 then 0% tax on the entire salary.
//     If 1000000 >= salary > 500000 then 10% tax on the entire salary.
//     If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
//     If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
  let tax = 0;
  switch (true) {
    case salary > 1500000:
      tax = 0.3 * salary;
      break;
    case salary > 1000000:
      tax = 0.2 * salary;
      break;
    case salary > 500000:
      tax = 0.1 * salary;
      break;
    default:
      tax = 0;
  }
  return tax;
}

console.log(findTax(1500000));
