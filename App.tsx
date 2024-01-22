/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CameraComponent from './CameraComponent';

function App(): React.JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView flex={1}>
      <Button title="toggle" onPress={() => setShow(x => !x)} />

      {show && <CameraComponent />}
    </SafeAreaView>
  );
}

export default App;
