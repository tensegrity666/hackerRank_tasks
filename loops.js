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

  arr = output_v.concat(output);

  if (arr.length >= 40) {
    arr = arr.slice(0, 20).join('\n').concat(TRUNC);
  } else {
    arr = arr.slice(0, 20).join('\n');
  }

  console.log(arr);
  return arr;
}

vowelsAndConsonants(s);