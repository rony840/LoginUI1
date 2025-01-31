import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background'; 
import { useEffect, useState } from 'react';
import LocationHelper from '../helper/LocationHelper';

const Pinned = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  useEffect(() => {    
    LocationHelper.getLocation((location)=> {
      console.log('Raw Location Data: ',location);
      const { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
    });
    let watcherId = LocationHelper.watchLocation((location)=> {
      console.log('Raw watch Location Data: ',location);
      const { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
    });
    return () => {
      LocationHelper.removeListener(watcherId);
      console.log('removing location watcher');
    }
  }, []);

  const loadLocation = async () => {
    
  }
  
  


  return (
    <View style={styles.container}>
      <Background style2={{ flex: 5 }} />

      <View style={[styles.contentContainer]}>
        <View style={styles.header}>
          <Heading title={`Pinned Inbox`} style2={{ color: 'white' }} />
        </View>
        <View style={styles.Cont2}>
          {/* Conditionally render latitude and longitude */}
          {location ? (
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
