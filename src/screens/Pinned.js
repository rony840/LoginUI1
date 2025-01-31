import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background'; 
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';

const Pinned = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [permissionStatus, setPermissionStatus] = useState(null);  // Track permission status

  useEffect(() => {
    // Request location permission when the component mounts
    Geolocation.requestAuthorization(
      () => {
        console.log('Location permission granted');
        setPermissionStatus('granted');
        getLocation();
      },
      (error) => {
        console.error("Location permission error:", error);
        setPermissionStatus('denied');
      }
    );
    let listenerId = Geolocation.watchPosition(
      (position) => {
        console.log('tacking location:', position);
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting location", error);
      },{distanceFilter: 10}
    );
    return() => {Geolocation.clearWatch(listenerId)};
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('Raw location data:', position);
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting location", error);
        // Handle error, e.g. location service not available
      }
    );
    
  };

  
  


  return (
    <View style={styles.container}>
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer]}>
        <View style={styles.header}>
          <Heading title={`Pinned Inbox`} style2={{ color: 'white' }} />
        </View>
        <View style={styles.Cont2}>
          {/* Conditionally render latitude and longitude */}
          {permissionStatus === 'granted' ? (
            location.latitude && location.longitude ? (
              <Heading
                title={`Lat: ${location.latitude} and Lon: ${location.longitude}`}
                style2={{ color: 'black', fontSize: 18 }}
              />
            ) : (
              <Heading title={`Loading location...`} style2={{ color: 'black', fontSize: 18 }} />
            )
          ) : permissionStatus === 'denied' ? (
            <Heading title={`Permission denied`} style2={{ color: 'black', fontSize: 18 }} />
          ) : (
            <Heading title={`Requesting permission...`} style2={{ color: 'black', fontSize: 18 }} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  Cont2: {
    flex: 1,
    marginTop: '50%',
  },
});

export default Pinned;
