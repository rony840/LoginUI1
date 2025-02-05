import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, StyleSheet } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background';
import LocationHelper from '../helper/LocationHelper';

const Pinned = forwardRef((props, ref) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const locationRef = useRef({ latitude: null, longitude: null });

  
  useImperativeHandle(ref, () => ({
    getLocation: () => locationRef.current,  
    updateLocation: (latitude, longitude) => {
      locationRef.current = { latitude, longitude };
      setLocation(locationRef.current);
    },
  }));

  
  useEffect(() => {
    const watcherId = LocationHelper.watchLocation((location) => {
      const { latitude, longitude } = location.coords;
      locationRef.current = { latitude, longitude };  
      setLocation(locationRef.current); 
    });

    return () => {
      LocationHelper.removeListener(watcherId); 
    };
  }, []);

  return (
    <View style={styles.container}>
      <Background style2={{ flex: 5 }} />
      <View style={[styles.contentContainer]}>
        <View style={styles.header}>
          <Heading title={`Pinned Inbox`} style2={{ color: 'white' }} />
        </View>
        <View style={styles.Cont2}>
          {location.latitude && location.longitude ? (
            <Heading
              title={`Lat: ${location.latitude} and Lon: ${location.longitude}`}
              style2={{ color: 'black', fontSize: 18 }}
            />
          ) : (
            <Heading title={`Loading location...`} style2={{ color: 'black', fontSize: 18 }} />
          )}
        </View>
      </View>
    </View>
  );
});

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
