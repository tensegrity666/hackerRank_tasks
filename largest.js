'Use strict';

/**
*   Return the second largest number in the array.
**/

function getSecondLargest(nums) {
  let number = 0;
  let largest = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > largest) {
      largest = nums[i];
    };
  };
  console.log(largest);

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < largest) {
      number = nums[i];
    };
  };
  console.log(number);
};

const nums = [2, 3, 6, 6, 5];

getSecondLargest(nums);
