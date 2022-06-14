import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../entities';
import {screenNames} from '../../../../navigation/screenNames';
import {NavigationStack} from '../../../../navigation/entities';
import {shadowStyles} from '../../constants';
import styles from './styles';

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({user}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();

  const handleOpenUserDetails = () =>
    navigation.navigate(screenNames.USER_DETAILS, {username: user.login});

  return (
    <TouchableOpacity
      style={[styles.card, shadowStyles]}
      testID={'userCard'}
      onPress={handleOpenUserDetails}>
      <View style={styles.container}>
        <Image source={{uri: user.avatarUrl}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Username:</Text>
          <Text style={styles.text}>{user.login}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
