import { PermissionsAndroid } from "react-native";

class PermissionHelper{
    constructor () {
        console.log('i am android permission helper');
    };
    locationPermission = async () => {
      try{
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Allow Login Location Permission',
            message:
              'Login app is asking for Location permission for security',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission Granted on Android!');
          return 'granted';
        } else {
          console.log('location permission denied');
          return 'denied';
        }
      } catch (err) {
        console.warn(err);
        return 'error';
      }
    }
}

export default new PermissionHelper;