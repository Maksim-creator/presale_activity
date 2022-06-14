import {StyleSheet} from 'react-native';
import {white} from '../../../../assets/colors';

export default StyleSheet.create({
  reposTitle: {
    fontWeight: '900',
    fontSize: 30,
  },
  container: {
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    marginVertical: 5,
  },
  button: {
    backgroundColor: white,
    borderRadius: 100,
    padding: 3,
  },
  scrollView: {
    height: '100%',
  },
  activityIndicator: {
    height: '100%',
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
  },
  wrapper: {
    height: '100%',
  },
});
