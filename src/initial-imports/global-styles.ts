import * as globalProps from 'react-native-global-props';
import { fonts } from '../app/common/constants/fonts';

const customTextProps = {
  style: {
    fontFamily: fonts.medium,
  },
};

globalProps.setCustomText(customTextProps);
globalProps.setCustomTextInput(customTextProps);
