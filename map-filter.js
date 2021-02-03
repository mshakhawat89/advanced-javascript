// numbers = [3,4,5,6,7,8,9];
// output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//      const result = element*element;
// output.push(result);
// }
// console.log(output);




// numbers = [3,4,5,6,7,8,9];
// function square(element){
//  return element*element;
// }
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// });



// numbers = [3,4,5,6,7,8,9];
// const result = numbers.map(function(element){
//    return element*element;})
//    console.log(result);


// const square = element=> element*element;
// const square = x => x*x;



// numbers = [3,4,5,6,7,8,9];
// const result = numbers.map(x=>x*x);
// console.log(result);


numbers = [3,4,5,6,7,8,9];

const bigger = numbers.filter(x=> x>5);
console.log(bigger);

const isThere = numbers.find(x=> x>5);
console.log(isThere);


