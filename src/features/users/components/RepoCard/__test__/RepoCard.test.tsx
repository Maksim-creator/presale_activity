import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import RepoCard from '../index';
import {languageColors, shadowStyles} from '../../../constants';
import styles from '../styles';
import {gray} from '../../../../../assets/colors';

describe('RepoCard', () => {
  it('should redirect to browser', async () => {
    const page = render(
      <RepoCard
        stargazersCount={'1'}
        language={'javascript'}
        createdAt={''}
        url={''}
        name={''}
      />,
    );

    const redirectButton = await page.findByTestId('repoCardButton');
    fireEvent.press(redirectButton);
  });
  it('should choose active color', () => {
    const {getByTestId} = render(
      <RepoCard
        stargazersCount={'1'}
        language={'javascript'}
        createdAt={''}
        url={''}
        name={''}
      />,
    );

    const element = getByTestId('languageIndicator');
    expect(element.props).toEqual({
      children: undefined,
      style: [
        styles.indicator,
        shadowStyles,
        {backgroundColor: '#f1e05a', shadowColor: '#f1e05a'},
      ],
      testID: 'languageIndicator',
    });
  });
  it('should choose inactive color', () => {
    const {getByTestId} = render(
      <RepoCard
        stargazersCount={'1'}
        language={undefined}
        createdAt={''}
        url={''}
        name={''}
      />,
    );

    const element = getByTestId('languageIndicator');
    expect(element.props).toEqual({
      children: undefined,
      style: [
        styles.indicator,
        shadowStyles,
        {backgroundColor: gray, shadowColor: gray},
      ],
      testID: 'languageIndicator',
    });
  });
});
