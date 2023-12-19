'use strict';

// 1. printIndices
function printIndices(items) {
  // For... in gets each index in an array
  for (const i in items) {
    console.log(i);
    console.log(states[i])
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const resultItems = []

  for (const i in items) {
    if (i % 2 === 0) {
      resultItems.push(items[i]);
    }
    
    console.log(resultItems);
    
  }
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // print a list of the `n` smallest integers in items
  // order the integers in descending order
  // `n` will be less than the length of the list 

  // slice into an array -> items.slice(2); 
  // smallest_items = items.sort((a, b) => a - b);
  // for (const item of items) {
  //   // console.log(item)
  //   items.slice(0,n);
  // }
  console.log(items.slice(0,n))
  
  
}
