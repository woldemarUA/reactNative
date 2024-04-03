import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../context/UserProvider';

function ProfileScreen() {
  const { handleLogout, user } = useUser();
  console.log(user);
  const navigate = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text>Bonjour mon ami</Text>
      </View>
      <View style={styles.button}>
        <Button
          title='Deconnecter'
          onPress={() =>
            handleLogout(() => {
              navigate.reset({ index: 0, routes: [{ name: 'Login' }] });
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
