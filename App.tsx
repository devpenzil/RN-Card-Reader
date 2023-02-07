import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
const App = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    getCameraPermission();
  }, []);
  const getCameraPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
  };
  if (device == null) {
    return (
      <>
        <ActivityIndicator />
      </>
    );
  } else {
    return (
      <>
        <View>
          <Camera device={device} isActive={true} style={{height: '100%'}} />
        </View>
      </>
    );
  }
};

export default App;
