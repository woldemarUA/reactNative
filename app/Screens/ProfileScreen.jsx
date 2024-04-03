import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../context/UserProvider';

function ProfileScreen() {
  const { handleLogout, profile } = useUser();
  const navigate = useNavigation();
  if (!profile) {
    return (
      <View>
        <Text>Loading..</Text>
        <CameraComponent></CameraComponent>
      </View>
    );
  }
  const {
    displayName,
    email,
    emailVerified,
    phoneNumber,
    photoURL,
    lastLoginAt,
  } = profile;

  return (
    <>
      <View style={styles.container}>
        <Text>Bonjour {email} </Text>
      </View>
      <View style={styles.button}>
        <Button
          title='Deconnecter'
          onPress={() =>
            handleLogout(() => {
              navigate.reset({ index: 0, routes: [{ name: 'Connecter' }] });
            })
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},
});

export default ProfileScreen;
