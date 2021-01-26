import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../constants';

const bottomNavBarHeight =
  Dimensions.get('screen').height - Dimensions.get('window').height;

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    minHeight: hp(16),
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
  },
  cell: {
    flex: 1,
    /* borderWidth: 1,
    borderColor: 'blue', */
    alignItems: 'center',
  },
  label: {
    textTransform: 'uppercase',
    color: colors.brown,
    fontSize: wp(3),
    /* borderWidth: 1,
    borderColor: 'red', */
    textAlign: 'center',
    marginTop: hp(0.15),
  },
  icon: {
    /* borderWidth: 1,
    borderColor: 'red', */
  },
});
