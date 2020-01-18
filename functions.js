'Use strict';

function factorial(n) {
  if ((n === 1) || (n === 2)) {
    return n;
  } else {
    return n * factorial(n - 1);
  };
};

console.log(factorial(5)); //120
