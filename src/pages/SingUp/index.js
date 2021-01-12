import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Formik, Field} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {SignUpValidationSchema, initialSignUpFields} from '../../config';
import StyledTextInput from '../../components/StyledTextInput';
import StyledText from '../../components/StyledText';
import Loader from '../../components/Loader';
import StyledModal from '../../components/StyledModal';

const SignUp = ({
  loading,
  isSignedUp,
  error,
  onSignUp,
  onClearError,
  onMoveToApp,
}) => {
  const refInputEmail = useRef();
  const refInputPassword = useRef();
  const refInputSecondPassword = useRef();

  useEffect(() => {
    isSignedUp && onMoveToApp && onMoveToApp();
  }, [isSignedUp]);

  const handleFullNameSubmit = () => {
    refInputEmail.current.focus();
  };

  const handleEmailSubmit = () => {
    refInputPassword.current.focus();
  };

  const handlePasswordSubmit = () => {
    refInputSecondPassword.current.focus();
  };

  const handleRegister = (data) => {
    onSignUp && onSignUp(data);
  };

  const handleClose = () => {
    onClearError && onClearError();
  };

  if (loading) {
    return <Loader size={'large'} />;
  }

  return (
    <KeyboardAwareScrollView style={styles.signUp}>
      <Formik
        validationSchema={SignUpValidationSchema}
        initialValues={initialSignUpFields}
        onSubmit={handleRegister}>
        {({handleSubmit, isValid}) => (
          <>
            <StyledText style={styles.signUp__title}>
              Fill the following form
            </StyledText>

            <Field
              component={StyledTextInput}
              title="Full name"
              name="username"
              placeholder="Enter name..."
              containerStyles={styles.singUp__margin}
              returnKeyType={'next'}
              autoCorrect={false}
              maxLength={255}
              blurOnSubmit={false}
              onSubmitEditing={handleFullNameSubmit}
              valueDef={'Maks Sivashov'}
            />

            <Field
              innerRef={refInputEmail}
              component={StyledTextInput}
              title="E-mail"
              name="email"
              placeholder="Enter e-mail..."
              containerStyles={styles.singUp__margin}
              returnKeyType={'next'}
              autoCompleteType={'email'}
              autoCorrect={false}
              maxLength={255}
              blurOnSubmit={false}
              onSubmitEditing={handleEmailSubmit}
              valueDef={'maks@sivash.ru'}
            />

            <Field
              innerRef={refInputPassword}
              component={StyledTextInput}
              title="Password"
              name="password"
              isPassword={true}
              placeholder="Enter password..."
              containerStyles={styles.singUp__margin}
              returnKeyType={'next'}
              autoCorrect={false}
              maxLength={255}
              blurOnSubmit={false}
              onSubmitEditing={handlePasswordSubmit}
              valueDef={'Mamaelena1973@'}
            />

            <Field
              innerRef={refInputSecondPassword}
              component={StyledTextInput}
              title="Confirm password"
              name="confirmPassword"
              isPassword={true}
              placeholder="Confirm password..."
              containerStyles={styles.singUp__margin}
              returnKeyType={'done'}
              autoCorrect={false}
              maxLength={255}
              valueDef={'Mamaelena1973@'}
            />

            <View style={styles.singUp__margin}>
              <Button
                title="Submit"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>

      <StyledModal
        state={error}
        text={error}
        hasButton={true}
        isTransparent={true}
        onClose={handleClose}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  signUp__title: {
    fontSize: 18,
    textAlign: 'center',
  },

  singUp__margin: {
    marginTop: 20,
  },
});

export default SignUp;
