import React from 'react';
import {View, Text} from 'react-native';
import {shadowStyles} from '../../constants';
import {Follower} from '../../entities';
import styles from './styles';

interface Props {
  followers: Follower[];
}

const FollowersList: React.FC<Props> = ({followers}) => {
  return (
    <View style={[styles.flatList, shadowStyles]}>
      {followers.map(follower => {
        return (
          <View key={follower.login} style={styles.container}>
            <View style={styles.listItemIndicator} />
            <Text style={styles.name}>{follower.login}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default FollowersList;
