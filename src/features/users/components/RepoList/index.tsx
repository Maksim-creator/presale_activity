import React from 'react';
import {Text, View} from 'react-native';
import {Repo} from '../../entities';
import {formatRepoUrl} from '../../utils';
import RepoCard from '../RepoCard';

interface Props {
  userRepos: Repo[];
}

const RepoList: React.FC<Props> = ({userRepos}) => {
  return (
    <View>
      {userRepos.length ? (
        <View>
          {userRepos.map(repo => {
            const repoUrl = formatRepoUrl(repo.url);

            return (
              <RepoCard
                key={repo.createdAt}
                name={repo.name}
                url={repoUrl}
                createdAt={repo.createdAt}
                language={repo.language}
                stargazersCount={repo.stargazersCount}
              />
            );
          })}
        </View>
      ) : (
        <Text>User has no created repositories yet</Text>
      )}
    </View>
  );
};

export default RepoList;
