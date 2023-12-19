'use strict';

// 1. isHometown


function isHometown(town) {

    return town === 'San Francisco';
}

// 2. getFullName

// Define your function here
function getfullName(firstname, lastname) {
    // given a first and last name, return a full name
    return firstname + lastname;
}

// 3. calculateTotal

// Define your function here
function calculateTotal(basePrice, state, tax=0.05) {
    // Return the total price of an item, figuring in state tax and fees
    // else if (state === 'MA'){
        let subtotal = basePrice * (1 + tax); 
        let fee = 0;
    
        if (state === 'CA') {
          fee = 0.03 * subtotal;
        } else if (state === 'PA') {
          fee = 2;
        }
    
        return subtotal + fee;
      }

