// @flow
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constants';
import { sizes } from '../../constants/sizes';

export default StyleSheet.create({
  container: {
    // height: hp(5.5),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: wp(sizes.padding) / 2,
    marginHorizontal: wp(sizes.horizontal),
    // marginHorizontal: wp(4),
    // opacity: 0.9,
  },
  gold: {
    backgroundColor: '#D8B362',
  },
  error: {
    backgroundColor: colors.error,
  },
  errorText: {
    textAlign: 'center',
    // fontFamily: fonts.medium,
  },
  message: {
    flex: 1,
    flexDirection: 'row',
    textAlignVertical: 'center',
    fontSize: wp(3.5),
    // fontFamily: fonts.medium,
    color: colors.white,
  },
  status: {
    height: '100%',
    marginLeft: wp(6),
    color: colors.white,
  },
  closeImg: {
    width: wp(4),
    resizeMode: 'contain',
    marginLeft: wp(6),
  },
});
