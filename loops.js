'Use strict';

const s = 'learnjavascriptloopsinhackerrankweekofcode';

function vowelsAndConsonants(s) {
  const VOWELS = 'aeiou';
  const output_v = [];
  const output = [];
  let arr = [];
  const TRUNC = '{-truncated-}';

  for (let char of s) {
    if (VOWELS.includes(char)) {
      output_v.push(char);
    };

    if (!VOWELS.includes(char)) {
      output.push(char);
    };
  };

  arr = output_v.concat(output).join('\n');
  return arr;
}

vowelsAndConsonants(s);