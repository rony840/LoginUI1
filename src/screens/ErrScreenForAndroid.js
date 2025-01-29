import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { Heading } from '../components/Components';
import Background from '../components/Background'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

const ErrForAndroid = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Background style2={{ flex: 5 }} />
      <View style={[styles.contentContainer, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Heading title={`Error on Android`} style2={{ color: 'white' }} />
        </View>
        <View style={styles.cont2}>
        <Image style={styles.icn} source={require('../icons/brokeAndroid.png')}/>
        <Heading title={`This screen is not supported on Android Devices`} style2={{ color: 'black', fontSize:18 }} />
        </View>
      </View>
      
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
  icn:{
    width:200,
    height:200,
    marginBottom:50
  },
  cont2:{
    flex: 1,
    top: 0,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  }
});

export default ErrForAndroid;
