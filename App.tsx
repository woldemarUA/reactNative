import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
      </View>
      <View style={styles.btnsContainer}>
        <View style={styles.button}>
          <Button title='Connecter' />
        </View>
        <View style={styles.button}>
          <Button title="S'inscrire" />
        </View>
        <View style={styles.button}>
          <Button title='Deconnecter' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 5,
  },
  logo: {
    resizeMode: 'center',
    // flex:1
  },
  btnsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 10,
  },

  button: {
    flex: 1,

    // marginHorizontal:5
  },
});
