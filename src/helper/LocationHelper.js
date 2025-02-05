import Geolocation from "@react-native-community/geolocation";

class LocationHelper{
    constructor () {
        console.log('i am location helper!');
    }
    getLocation = callback => {
        Geolocation.getCurrentPosition (position => callback(position));
    };
    watchLocation = (callback,distanceFilter = 1) => {
        let watcherId = Geolocation.watchPosition(
            position => callback(position),
            error => console.log(error),
            {
                distanceFilter: distanceFilter, 
                enableHighAccuracy: true, 
                timeout: 1000, 
                maximumAge: 500, 
            });
        
        return watcherId;
    };
    removeListener = id => {
        Geolocation.clearWatch (id);
    };
}

export default new LocationHelper ();