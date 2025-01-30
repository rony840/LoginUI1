import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background'; 
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';

const Pinned = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    // Fetch current position when the component mounts
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting location", error);
        // Handle error, if needed (maybe set a default location or show a message)
      }
    );
  }, []); // Empty array means this effect runs once on mount

  return (
    <View style={styles.container}>
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer]}>
        <View style={styles.header}>
          <Heading title={`Pinned Inbox`} style2={{ color: 'white' }} />
        </View>
        
        {/* Conditionally render latitude and longitude */}
        {location.latitude && location.longitude ? (
          <Heading title={`Lat: ${location.latitude} and Lon: ${location.longitude}`} style2={{ color: 'black', fontSize:18 }} />
        ) : (
          <Heading title={`Loading location...`} style2={{ color: 'black', fontSize:18 }} />
        )}
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
  formContainer: {
    flex: 1,
    top: 0,
    marginTop: '10%',
    justifyContent: 'center',
  },
});

export default Pinned;
