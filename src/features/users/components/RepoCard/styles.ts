import {StyleSheet} from 'react-native';
import {black, white} from '../../../../assets/colors';

export default StyleSheet.create({
  repoHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  repoContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: white,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: black,
  },
  stars: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  repoName: {
    fontSize: 20,
    fontWeight: '600',
    width: '80%',
  },
  language: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    marginRight: 5,
    height: 10,
    width: 10,
    borderRadius: 100,
  },
});
