import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Repo, User} from '../../features/users/entities';
import {black, gray} from '../../assets/colors';
import {shadowStyles} from '../../features/users/constants';
import styles from './styles';

interface Props {
  page: number;
  data: User[] | Repo[];
  goNext: Function;
  goPrevious: Function;
  rowsPerPage: number;
}

const Pagination: React.FC<Props> = ({
  data,
  page,
  goNext,
  goPrevious,
  rowsPerPage,
}) => {
  const previousDisabled = useMemo(
    () => page === 1 || !data.length,
    [page, data.length],
  );
  const nextDisabled = useMemo(
    () => !data.length || data.length < rowsPerPage,
    [rowsPerPage, data.length],
  );

  return (
    <View style={[styles.wrapper, shadowStyles]}>
      <TouchableOpacity
        testID={'goPrev'}
        disabled={previousDisabled}
        onPress={() => goPrevious()}>
        <Icon
          name={'chevron-left'}
          size={30}
          color={previousDisabled ? gray : black}
        />
      </TouchableOpacity>
      <Text testID={'page'}>{page}</Text>
      <TouchableOpacity
        testID={'goNext'}
        disabled={nextDisabled}
        onPress={() => goNext()}>
        <Icon
          name={'chevron-right'}
          size={30}
          color={nextDisabled ? gray : black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
