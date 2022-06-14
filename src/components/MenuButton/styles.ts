import {StyleSheet} from 'react-native';
import {gray, white} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: 170,
    marginVertical: 10,
    alignSelf: 'flex-end',
    zIndex: 5,
  },
  menuButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: white,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
  },
  submenuButton: {
    position: 'absolute',
    backgroundColor: white,
    borderRadius: 15,
    width: 170,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  divider: {
    height: 1,
    backgroundColor: gray,
    opacity: 0.5,
    marginVertical: 6,
  },
});
