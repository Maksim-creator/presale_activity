import {StyleSheet} from 'react-native';
import {black, white} from '../../../../assets/colors';

export default StyleSheet.create({
  listItemIndicator: {
    height: 5,
    width: 5,
    borderRadius: 100,
    marginRight: 5,
    backgroundColor: black,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
  },
  flatList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: white,
    borderRadius: 15,
  },
});
