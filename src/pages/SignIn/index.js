import React, {useRef} from 'react';
import {View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Formik, Field} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  SignInValidationSchema,
  initialSignInFields,
  activeOpacity,
} from '../../config';
import StyledTextInput from '../../components/StyledTextInput';
import StyledText from '../../components/StyledText';

const SignIn = ({moveToSignUp}) => {
  const refInputPassword = useRef();

  const handleEmailSubmit = () => {
    refInputPassword.current.focus();
  };

  const handleMoveToSignUp = () => {
    moveToSignUp && moveToSignUp();
  };

  return (
    <KeyboardAwareScrollView style={styles.signIn}>
      <Formik
        validationSchema={SignInValidationSchema}
        initialValues={initialSignInFields}
        onSubmit={(values) => console.log('end', values)}>
        {({handleSubmit, isValid}) => (
          <>
            <StyledText style={styles.signIn__title}>Sing In</StyledText>

            <Field
              component={StyledTextInput}
              title="E-mail"
              name="email"
              placeholder="Enter e-mail..."
              containerStyles={styles.signIn__margin}
              returnKeyType={'next'}
              autoCompleteType={'email'}
              autoCorrect={false}
              maxLength={255}
              blurOnSubmit={false}
              onSubmitEditing={handleEmailSubmit}
            />
            <Field
              innerRef={refInputPassword}
              component={StyledTextInput}
              title="Password"
              name="password"
              isPassword={true}
              placeholder="Enter password..."
              containerStyles={styles.signIn__margin}
              returnKeyType={'done'}
              autoCorrect={false}
              maxLength={255}
            />

            <View style={styles.signIn__margin}>
              <Button
                title="Submit"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>

            <View style={[styles.signIn__margin, styles.signIn__linkWrap]}>
              <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={handleMoveToSignUp}>
                <StyledText style={styles.signIn__link}>
                  You haven't account yet?
                </StyledText>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  signIn: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  signIn__title: {
    fontSize: 18,
    textAlign: 'center',
  },

  signIn__margin: {
    marginTop: 20,
  },

  signIn__linkWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  signIn__link: {
    color: '#00a1d1',
    padding: 10,
    fontSize: 16,
  },
});

export default SignIn;
