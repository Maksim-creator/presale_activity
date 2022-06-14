import React from 'react';
import {render} from '@testing-library/react-native';
import RepoList from '../index';

describe('RepoList', () => {
  it('should render items', () => {
    const {getAllByLabelText} = render(
      <RepoList
        userRepos={[
          {
            language: 'r',
            url: '123',
            createdAt: 'date',
            stargazersCount: '1',
            name: 'Name',
          },
        ]}
      />,
    );

    const cards = getAllByLabelText('repoCardName');

    expect(cards).toHaveLength(1);
  });
  it('should not render items', () => {
    const {getByText} = render(<RepoList userRepos={[]} />);

    const text = getByText('User has no created repositories yet');
    expect(text).toBeTruthy();
  });
});
