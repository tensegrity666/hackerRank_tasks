'Use strict';

function getLetter(s) {
  let letter;
  const A = 'aeiou';
  const B = 'bcdfg';
  const C = 'hjklm';
  const D = 'npqrstvwxyz';
  // Write your code here
  if (A.includes(s[0])) {
    letter = 'A';
  } else if (B.includes(s[0])) {
    letter = 'B';
  } else if (C.includes(s[0])) {
    letter = 'C';
  } else if (D.includes(s[0])) {
    letter = 'D';
  };

  console.log(letter);
  return letter;
}

getLetter('adfgt');
