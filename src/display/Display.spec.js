import React from "react";
import { render } from '@testing-library/react';

import Display from "./Display";

test('Dashboard renders correctly ', ()=> {
    expect(render(<Display/>)).toMatchSnapshot();
})

// What do we need to do ?

// 1. 
// Test if screen displays when the gate is opened and closed 
// Clicked on buttons 
// check if there is an open and close button 
test('Gate defaults to unlocked and opened', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i)
  });


// 2.
// Test if screen displays when gate is locked and unlocked
// Clicked on buttons 
// check if there is a locked and an unlocked button 

// 3. 
// Test if screen shows closed if closed = true, displays open if otherwise 

// 4. 
// Test if screen displays locked if locked=true , displays unlocked if otherwise

// 5. 
// When clicked on locked = red-led class
// When clicked on closed = red-led class



// 6. 
// When clicked on unlocked = "green-led" class
// When clicked on open = "green-led" class 

