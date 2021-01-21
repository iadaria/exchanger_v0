import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { sizes } from './sizes';

export const fonts = {
  light: 'Monstserrat-Light',
  black: 'Montserrat-Black',
  bold: 'Montserrat-Bold',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
  // thin: 'Montserrat-Thin',
  h1: {
    fontSize: wp(sizes.h1),
  },
  h2: {
    fontSize: wp(sizes.h2),
  },
  h3: {
    fontSize: wp(sizes.h3),
  },
  header: {
    fontSize: wp(sizes.header),
  },
  title: {
    fontSize: wp(sizes.title),
  },
  body: {
    fontSize: wp(sizes.body),
  },
  caption: {
    fontSize: wp(sizes.caption),
  },
};
