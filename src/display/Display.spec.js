import React from "react";
import '@testing-library/jest-dom/extend-expect';
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
// Test if screen shows closed and locked 
test("displays closed = true", () => {
    expect(render(<Display locked={true} closed={true} />)).toMatchSnapshot();
  });

// 4. // Test if screen shows open and unlocked 
test("displays open and unlocked", () => {
    expect(render(<Display locked={false} closed={false} />)).toMatchSnapshot();
  });

// 5. 
// When clicked on locked = red-led class
test("locked = red class ", () => {
    const { queryByText } = render(<Display locked={true} />);
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass("red-led");
  });

// When clicked on closed = red-led class
test("open = green class ", () => {
    const { queryByText } = render(<Display closed={true} />);
    const closed= queryByText(/closed/i);
    expect(closed).toHaveClass("red-led");
  });


// 6. 
// When clicked on unlocked = "green-led" class

test("unlocked= green class ", () => {
    const { queryByText } = render(<Display locked={false} />);
    const unlocked = queryByText(/unlocked/i);
    expect(unlocked).toHaveClass("green-led");
  });

  // When clicked on open = "green-led" class 

  test("open = green class ", () => {
    const { queryByText } = render(<Display closed={false} />);
    const open = queryByText(/open/i);
    expect(open).toHaveClass("green-led");
  });

 