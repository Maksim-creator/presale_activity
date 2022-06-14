import React from 'react';
import {FlatList} from 'react-native';
import {User} from '../../entities';
import UserCard from '../UserCard';
import styles from './styles';

interface Props {
  users: User[] | [];
}

const UsersList: React.FC<Props> = ({users}) => {
  const renderItem = ({item}: {item: User}) => {
    return <UserCard user={item} />;
  };

  const keyExtractor = (item: User) => item.id.toString();

  return (
    <FlatList
      style={styles.users}
      data={users}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default UsersList;
