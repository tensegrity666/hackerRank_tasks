'Use strict';

function vowelsAndConsonants(s) {
  const output = [];
  const vowels = 'aeiou';
  for (let char of s) {
    if (vowels.includes(char)) {
      output.push(char);
      output.sort();
    };
  };
  return console.log(output)
}

const s = 'javascriptloops';

vowelsAndConsonants(s);
