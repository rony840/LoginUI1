import Geolocation from "@react-native-community/geolocation";

class LocationHelper{
    constructor () {
        console.log('i am location helper!');
    }
    getLocation = callback => {
        Geolocation.getCurrentPosition (position => callback(position));
    };
    watchLocation = callback => {
        let watcherId = Geolocation.watchPosition (position => callback(position));
        return watcherId;
    };
    removeListener = id => {
        Geolocation.clearWatch (id);
    };
}

export default new LocationHelper ();