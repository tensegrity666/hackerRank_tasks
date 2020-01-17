'Use strict';

const s = 'javascriptloops';
const VOWELS = 'aeiou';


function vowelsAndConsonants(s) {
  const output_v = [];
  const output = [];
  let arr = [];

  for (let char of s) {
    if (VOWELS.includes(char)) {
      output_v.sort().push(char);
    };
    if (!VOWELS.includes(char)) {
      output.sort().push(char)
    };
    arr = output_v.concat(output).join('');
  };
  for (let n of arr) {
    console.log(n);
  }
}

vowelsAndConsonants(s);