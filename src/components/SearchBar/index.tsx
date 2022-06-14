import React from 'react';
import {Platform, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {gray} from '../../assets/colors';
import {shadowStyles} from '../../features/users/constants';
import styles from './styles';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
  clearInput: () => void;
}

const SearchBar: React.FC<Props> = ({value, onChangeText, clearInput}) => {
  return (
    <View
      testID={'searchBarWrapper'}
      style={[styles.searchSection, Platform.OS !== 'ios' ? {} : shadowStyles]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={'Enter username'}
      />
      <Icon name={'close'} size={20} color={gray} onPress={clearInput} />
    </View>
  );
};

export default SearchBar;
