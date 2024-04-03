import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

function CameraComponent(props) {
  const [type, setType] = useState(Camera.Constants.setType.back);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null)
    return (
      <View>
        <Text>Pas de permission de Camera utilisation</Text>
      </View>
    );

  if (hasPermission === false)
    return (
      <View>
        <Text>Pas de camera access</Text>
      </View>
    );

  //   <Camera
  //   barCodeScannerSettings={{
  //     barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
  //   }}
  // />
  return (
    <View style={styles.container}>
      <Camera style={styles.cameraContainer}>
        <View style={styles.cameraView}>
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={
              type === Camera.Constants.type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            }>
            <Text style={styles.flipContainer}>FLIP CAMERA</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  touchableContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  flipContainer: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});

export default Camera;
