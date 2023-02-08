import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    minWidth: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },

  cardTop: {
    width: '100%',
    height: '60%',
    padding: 30,
    backgroundColor: '#fff',
  },
  cardBottom: {
    width: '100%',
    height: '40%',
    backgroundColor: '#A89B8C',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  name: {
    fontSize: 56,
    fontWeight: '800',
    color: '#8F5C38',
    marginTop: 30,
    marginHorizontal: 30,
  },
  id: {
    color: '#8F5C38',
    marginTop: 10,
    fontSize: 16,
    marginHorizontal: 30,
  },
  bottomBox: {
    backgroundColor: '#8F5C38',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  boxtext: {
    textAlign: 'center',
    color: '#EDF0DA',
    fontSize: 16,
    fontWeight: '700',
  },
  avatar: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  another: {
    color: '#000',
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
  },
  Camera: {
    height: 300,
    width: 300,
  },
  cameraWrapper: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
  },
});
