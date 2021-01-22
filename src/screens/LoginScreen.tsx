import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Block, AppText, AppPapperInput } from '../app/common/components/ui';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Separator from '../app/common/components/ui/Separator';
import SocialLogin from '../features/auth/SocialLogin';
import { signInWithEmail } from '../app/firestore/firebaseService';
import { getColorText } from '../app/common/utils/utils';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { IUserFormValues } from '../app/models/IUser';
import { theme } from '../constants';
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
    <Block safe base>
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
            <Block debug>
              <AppText big center>
                Добро пажаловать 🎉
              </AppText>
              <AppText h3 center>
                Введите данные для продолжения работы в iad
              </AppText>

              {errors.auth && (
                <AppText accent center>
                  {errors.auth}
                  {errors.email}
                  {errors.password}
                </AppText>
              )}

              <AppPapperInput
                outlined
                main
                label="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />

              <TextInput
                style={styles.enterData}
                placeholder="Логин или почтовый адрес"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('login')}
                value={values.email}
              />
              <TextInput
                style={styles.enterData}
                placeholder="Пароль"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Text style={styles.forgotPassword}>Забыли пароль?</Text>

              <View style={styles.viewButtons}>
                <Button
                  disabled={isDisabledSubmit}
                  color={theme.colors.main}
                  onPress={handleSubmit}
                  accessibilityLabel="label"
                  title="Продолжить"
                  //TODO ActivityIndicator with custom button
                />
              </View>

              <Separator />

              <Text style={{ textAlign: 'center' }}>ИЛИ</Text>

              <SocialLogin goToMainScreen={goToMainScreen} />
            </Block>
          );
        }}
      </Formik>

      <Separator />

      <Text style={styles.signUp}>Ещё нет аккаунта? Зарегистрироваться</Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  root: {
    //borderColor: 'red', borderWidth: 2,
    flex: 1,
    //alignItems: "center",
    padding: '8%',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
  },
  enter: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: '5%',
  },
  enterData: {
    width: '100%',
    marginTop: '5%',
    fontSize: 18,
    //borderColor: '#737373', borderWidth: StyleSheet.hairlineWidth, borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    color: 'grey',
    padding: 10,
  },
  forgotPassword: {
    //borderColor: 'brown', borderWidth: 1,
    marginTop: '5%',
    color: theme.colors.main,
    alignSelf: 'flex-start',
    fontSize: 18,
  },
  viewButtons: {
    //borderColor: 'grey', borderWidth: 1,
    marginVertical: '5%',
  },
  signUp: {
    fontSize: 18,
    textAlign: 'center',
  },
});
