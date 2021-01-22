import React from 'react';
import {
  Block,
  AppText,
  AppPapperInput,
  AppButton,
  Divider,
} from '../app/common/components/ui';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SocialLogin from '../features/auth/SocialLogin';
import { signInWithEmail } from '../app/firestore/firebaseService';
import { getColorText } from '../app/common/utils/utils';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { IUserFormValues } from '../app/models/IUser';
import { sizes } from '../app/common/constants/sizes';
//TODO Error Sign in + after error add "Enter the code shown above" - capchar, forgot password and
//etc

interface IError {
  auth?: string;
}

export default function LoginScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  const goToMainScreen = () => navigation.navigate('MainBottom');

  return (
    <Block safe base full>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={async (
          values: IUserFormValues & IError,
          { setSubmitting, setErrors },
        ) => {
          console.log(getColorText('values', values, 'green'));
          try {
            await signInWithEmail(values);
            goToMainScreen();
          } catch (error) {
            setErrors({ auth: 'Неверные логин и/или пароль' });
            console.log(error);
          } finally {
            setSubmitting(false);
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
          errors,
          values,
        }) => {
          const isDisabledSubmit = !isValid || !dirty || isSubmitting;
          return (
            <Block full debug>
              <AppText big center>
                Добро пажаловать 🎉
              </AppText>

              <Block margin={[sizes.top, 0]}>
                <AppText h3 center>
                  Введите данные для продолжения работы в iad
                </AppText>
              </Block>

              {errors.auth && (
                <AppText accent center>
                  {errors.auth}
                  {errors.email}
                  {errors.password}
                </AppText>
              )}

              <AppPapperInput
                main
                label="Имя или адрес электронной почты"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />

              <AppPapperInput
                main
                label="Пароль"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />

              <Block margin={[sizes.top, 0, 0]}>
                <AppText>Забыли пароль?</AppText>
              </Block>

              <Block margin={[sizes.top, 0, 0]}>
                <AppButton
                  main
                  disabled={isDisabledSubmit}
                  onPress={handleSubmit}
                  accessibilityLabel="label"
                  //TODO ActivityIndicator with custom button
                >
                  <AppText white capitalize center disabled={isDisabledSubmit}>
                    Продолжить
                  </AppText>
                </AppButton>
              </Block>

              <Block margin={[sizes.top, 0, 0]}>
                <AppText center>ИЛИ</AppText>
              </Block>

              <Divider />

              <SocialLogin goToMainScreen={goToMainScreen} />
            </Block>
          );
        }}
      </Formik>

      <Divider />

      <AppText center>Ещё нет аккаунта? Зарегистрироваться</AppText>
    </Block>
  );
}
