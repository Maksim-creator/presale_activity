import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MenuButton from '../index';

describe('MenuButton', () => {
  it('should render', () => {
    const {getByTestId} = render(
      <MenuButton
        data={[{value: 50}]}
        isVisible={true}
        setIsVisible={() => {}}
        value={25}
        handleChange={() => {}}
      />,
    );

    const element = getByTestId('menuButton');
    fireEvent.press(element);

    const visibleItems = getByTestId('visibleElements');
    expect(visibleItems).toBeTruthy();
  });
  it('should select menu item', () => {
    const {getByTestId} = render(
      <MenuButton
        data={[{value: 50}]}
        isVisible={true}
        setIsVisible={() => {}}
        value={25}
        handleChange={() => {}}
      />,
    );

    const element = getByTestId('menuButtonItem');
    fireEvent.press(element, [{value: 50}]);
  });
});
