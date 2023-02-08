import {View, ActivityIndicator, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {OCRFrame, scanOCR} from 'vision-camera-ocr';
import Animated, {
  runOnJS,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import Lottie from 'lottie-react-native';
import {style} from './style';

const Home = () => {
  const [ocr, setOcr] = useState<OCRFrame>();
  const [gotdata, setGotdata] = useState(false);
  const [loading, setloading] = useState(false);

  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    getCameraPermission();
  }, []);

  useEffect(() => {
    if (ocr?.result.text !== '') {
      setloading(true);
    } else {
      setloading(false);
    }

    if (ocr?.result.text.replace(/\s/g, '').includes('57795')) {
      setGotdata(true);
    }
  }, [ocr]);

  const getCameraPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    if (newCameraPermission !== 'authorized') {
      getCameraPermission();
    }
  };

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const data = scanOCR(frame);
    runOnJS(setOcr)(data);
  }, []);
  if (device == null) {
    return (
      <>
        <ActivityIndicator />
      </>
    );
  } else {
    return (
      <View style={style.wrapper}>
        <View>
          {gotdata ? (
            <Animated.View style={style.container}>
              <View style={style.cardTop}>
                <Image source={require('./user.png')} style={style.avatar} />
              </View>
              <View style={style.cardBottom}>
                <Text style={style.name}>Ajo Alex</Text>
                <Text style={style.id}>Associate Engineer</Text>
                <Pressable
                  style={style.bottomBox}
                  onPress={() => {
                    setGotdata(false);
                  }}>
                  <Text style={style.boxtext}>Check another card</Text>
                </Pressable>
              </View>
            </Animated.View>
          ) : (
            <>
              <View style={style.cameraWrapper}>
                <Camera
                  device={device}
                  isActive={true}
                  style={style.Camera}
                  frameProcessor={frameProcessor}
                  frameProcessorFps={1}
                />
              </View>
              {loading === true && (
                <Lottie
                  source={require('../asset/loader.json')}
                  autoPlay
                  loop
                />
              )}
            </>
          )}
        </View>
      </View>
    );
  }
};

export default Home;
