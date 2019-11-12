// Test away!
import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';


test('Controls render', () => {
    expect(render(<Controls />)).toMatchSnapshot();
  });

  test('closed + unlocked , buttons = enabled', () => {
    const closedMock = jest.fn();
    const lockedMock = jest.fn();

    const { getByText } = render(<Controls closed={true} locked={false} toggledClosed={closedMock} toggleLocked={lockedMock}/>);

    const closeButton = getByText(/open gate/i);
    const lockButton = getByText(/lock gate/i);

    expect(closeButton.disabled).toBeFalsy();
    expect(lockButton.disabled).toBeFalsy();

    fireEvent.click(closeButton);
    expect(closedMock).not.toBeCalled();

    fireEvent.click(lockButton);
    expect(lockedMock).toBeCalled();

});

test('closed + locked, open = disabled and unlock = enabled', () => {
    const closedMock = jest.fn();
    const lockedMock = jest.fn();

    const { getByText } = render(<Controls closed={true} locked={true} toggledClosed={closedMock} toggledLocked={lockedMock} />);

    const openButton = getByText(/open gate/i);
    const unlockButton = getByText(/unlock gate/i);

    expect(openButton.disabled).toBeTruthy();
    expect(unlockButton.disabled).toBeFalsy();
});

test('open + unlocked, close button = clickable and lock = not clickable', () => {
    const closedMock = jest.fn();
    const lockedMock = jest.fn();

    const { getByText } = render(<Controls closed={false} locked={false} toggleClosed={closedMock} toggleLocked={lockedMock} />);

    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    expect(closeButton.disabled).toBeFalsy();
    expect(lockButton.disabled).toBeTruthy();

    fireEvent.click(closeButton);
    expect(closedMock).toBeCalled();

    fireEvent.click(lockButton);
    expect(lockedMock).not.toBeCalled();
});