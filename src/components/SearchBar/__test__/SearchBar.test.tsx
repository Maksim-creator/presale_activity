import React from 'react';
import {render} from '@testing-library/react-native';
import SearchBar from '../index';
import {black} from '../../../assets/colors';
import {Platform} from 'react-native';

describe('SearchBar', () => {
  let originalOS: 'ios' | 'android' | 'windows' | 'macos' | 'web';

  beforeEach(() => {
    originalOS = Platform.OS;
  });

  afterEach(() => {
    Platform.OS = originalOS;
    jest.restoreAllMocks();
  });

  it('should render ios shadow', () => {
    jest.spyOn(Platform, 'select').mockReturnValue('ios');

    const {getByTestId} = render(
      <SearchBar
        value={'text'}
        onChangeText={() => {}}
        clearInput={() => {}}
      />,
    );

    const wrapper = getByTestId('searchBarWrapper');

    expect(wrapper.props.style[1].shadowColor).toEqual(black);
  });
});
