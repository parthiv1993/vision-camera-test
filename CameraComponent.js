import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppState} from '@react-native-community/hooks';

import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const CameraComponent = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

  const device = useCameraDevice('back');

  const appState = useAppState();
  const isActive = appState === 'active';

  const format = useCameraFormat(device, [
    {videoResolution: {width: 3048, height: 2160}},
    {fps: 60},
  ]);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (device == null) {
    return <Text> No Camera</Text>;
  }

  if (!hasPermission) {
    requestPermission();
    return <Text> No Permission</Text>;
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
          backgroundColor: 'blue',
          margin: 5,
        }}>
        <Text>Camer here</Text>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          codeScanner={codeScanner}
        />
      </View>
    </>
  );
};

export default CameraComponent;
