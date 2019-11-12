import React from "react";
import { render } from '@testing-library/react';

import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

// rendering / text file 
test('Dashboard renders correctly ', ()=> {
    expect(render(<Dashboard/>)).toMatchSnapshot();
})

// Dashboard contains Controls 


test('Dashboard contains controls', () => {
    render(<Controls/>);
  });

//Dashboard contains Displays

test('Dashboard contains Display', () => {
    render(<Display/>);
});

