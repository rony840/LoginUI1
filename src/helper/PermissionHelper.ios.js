import Geolocation from "@react-native-community/geolocation";

class PermissionHelper{
    constructor () {
        console.log('i am ios permission helper');
    };
    locationPermission = () => {
        Geolocation.requestAuthorization(
            () => {
              console.log('Location permission granted on ios');
              return 'granted';
            },
            (error) => {
              console.error("Location permission error on ios:", error);
              return 'error';
            }
          );   
    }
}

export default new PermissionHelper;