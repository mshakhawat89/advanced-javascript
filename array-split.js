const nums = [1,2,3,4,5,6,7,8,9];
// const part = nums.slice(2,6);
// console.log(part);
// console.log(nums);

// const removed = nums.splice(3,5);
// console.log(removed);
// console.log(nums);

const removed = nums.splice(3,5, 34,49,90,200);
// console.log(removed);
// console.log(nums);

// const together = nums.join("");
// const together = nums.join(" ");
// const together = nums.join(",");
const together = nums.join(" equal ");
console.log(together);