import React from 'react';
import {render} from '@testing-library/react-native';
import FollowersList from '../index';

describe('FollowersList', () => {
  it('should render followers', () => {
    const {getByText} = render(<FollowersList followers={[{login: 'user'}]} />);

    const user = getByText('user');
    expect(user).toBeTruthy();
  });
});
