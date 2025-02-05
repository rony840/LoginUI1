import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Pinned from './Pinned';


const Archived = () => {
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [polylineCoords, setPolylineCoords] = useState([]);

  const pinnedRef = useRef();
console.log(pinnedRef)
  useEffect(() => {
    const interval = setInterval(() => {
      if (pinnedRef.current) {
        const latestLocation = pinnedRef.current.getLocation(); 

        if (latestLocation && latestLocation.latitude && latestLocation.longitude) {
          setLocation(latestLocation); 
          
          const { latitude, longitude } = latestLocation;
          
          setPolylineCoords((prevCoords) => [
            ...prevCoords,
            { latitude, longitude },
          ]);
        }
      }
    }, 1000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Heading title={`Archived Inbox`} style2={{ color: 'white' }} />
        </View>
        <MapView
          showsMyLocationButton={true}
          followsUserLocation={true}
          style={{ flex: 1 }}
          region={{
            latitude: polylineCoords[0]?.latitude || 37.78825,
            longitude: polylineCoords[0]?.longitude || -122.4324,
            latitudeDelta: 0.1022,
            longitudeDelta: 0.1121,
          }}
        >
          <Marker
            title="Tracking!"
            description="I am tracking my current location"
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          />

          {polylineCoords.length > 1 && (
            <Polyline
              coordinates={polylineCoords}
              strokeColor="#FF0000"
              strokeWidth={3}
            />
          )}
        </MapView>
      </View>
      <View style={{ height: 0, width: 0 }}><Pinned ref={pinnedRef} /></View>
    </SafeAreaView>
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
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
});

export default Archived;
