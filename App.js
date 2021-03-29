import React, {useEffect} from 'react';
import {
  View,
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  StatusBar,
  Text,
  StyleSheet,
} from 'react-native';

import wifi from 'react-native-android-wifi';

const isAndroid = Platform.OS === 'android';

/**
 * Android Marshmallow (6.0) and above need to ask the user to grant certain permissions.
 * This function does just that.
 */
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WAKE_LOCK,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      // permission denied
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const beaconSetup = async () => {
  // const granted = await requestLocationPermission();
  // if (granted) {
  // let wakeful = new Wakeful();
  // wakeful.acquire();
  // }
};

const onPress = () => {
  console.log('jhgjhgjghj');
  wifi.setEnabled(true);
  wifi.loadWifiList(
    wifiStringList => {
      var wifiArray = JSON.parse(wifiStringList);
      console.log(wifiArray);
    },
    error => {
      console.log(error);
    },
  );
};

const App: () => React$Node = () => {
  useEffect(() => {
    beaconSetup();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.countContainer}></View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
