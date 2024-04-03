import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useUser } from '../context/UserProvider';

const validation = Yup.object().shape({
  email: Yup.string()
    .email("l'e-mail doit être un e-mail valide")
    .required('Email est requis'),
  password: Yup.string()
    .min(3, 'Au moins 3 charachters')
    .required('Aucun mot de pass '),
});

export default function LoginScreen() {
  const { handleLogin } = useUser();
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(formValues) => {
        handleLogin(formValues, () => {
          //   navigation.navigate('Profile');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Profile' }],
          });
        });
      }}
      validationSchema={validation}>
      {(formikProps) => {
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.textInputContainer}
              placeholder='Votre email'
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
            />
            {formikProps.touched.email && formikProps.errors.email ? (
              <Text> {formikProps.errors.email} </Text>
            ) : null}

            <TextInput
              placeholder='votre mot de pass'
              style={styles.textInputContainer}
              secureTextEntry={true}
              onChangeText={formikProps.handleChange('password')}
              value={formikProps.values.password}
              onBlur={formikProps.handleBlur('password')}
            />
            {formikProps.touched.password && formikProps.errors.password ? (
              <Text> {formikProps.errors.password} </Text>
            ) : null}
            <Button
              title='Connecter'
              onPress={formikProps.handleSubmit}
            />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInputContainer: {
    backgroundColor: 'white',
    width: '50%',
    marginBottom: 5,
  },
});
