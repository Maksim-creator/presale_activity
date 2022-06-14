import {StyleSheet} from 'react-native';
import {gray} from '../../assets/colors';

export default StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424242',
  },
  searchSection: {
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 15,
    width: '100%',
    borderColor: gray,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});
