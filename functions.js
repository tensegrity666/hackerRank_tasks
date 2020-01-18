function factorial(n) {
  let counter = n;
  let fact = 0;
  while (counter > 1) {
    counter -= 1;
    console.log(counter);
    fact = n * (n - 1);
    console.log(fact);
  }
  console.log(fact);
  return n;
}

factorial(4);