import {StyleSheet} from 'react-native';
import {black, white} from '../../../../assets/colors';

export default StyleSheet.create({
  card: {
    backgroundColor: white,
    borderRadius: 15,
    marginVertical: 7,
    marginHorizontal: 5,
  },
  content: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  image: {height: 80, width: 80, borderRadius: 10},
  text: {
    color: black,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
});
