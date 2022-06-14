import React from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {gray} from '../../assets/colors';
import {shadowStyles} from '../../features/users/constants';
import styles from './styles';

interface Props {
  data: {
    value: number;
  }[];
  isVisible: boolean;
  setIsVisible: Function;
  value: number;
  handleChange: (value: number) => void;
  extraStyles?: StyleProp<ViewStyle>;
}

const MenuButton: React.FC<Props> = ({
  data,
  isVisible,
  setIsVisible,
  value,
  handleChange,
  extraStyles,
}) => {
  return (
    <View style={[styles.container, extraStyles]}>
      <TouchableOpacity
        testID={'menuButton'}
        onPress={() => setIsVisible((prevState: boolean) => !prevState)}
        style={[styles.menuButton, shadowStyles]}>
        <Text testID={'rowsPerPage'}>Rows per page: {value}</Text>
        <Icon
          testID={'icon'}
          name={!isVisible ? 'chevron-down' : 'chevron-up'}
          size={20}
          color={gray}
        />
      </TouchableOpacity>
      {isVisible ? (
        <View
          testID={'visibleElements'}
          style={[styles.submenuButton, shadowStyles]}>
          {data.map((item, index) => {
            return (
              <View testID={'menuButtonWrapper'} key={index}>
                {index !== 0 && (
                  <View testID={'divider'} style={styles.divider} />
                )}
                <TouchableOpacity
                  testID={'menuButtonItem'}
                  onPress={() => handleChange(item.value)}>
                  <Text>{item.value.toString()}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default MenuButton;
