import {View, StyleSheet} from 'react-native';

const Logo = () => {
    return(
        <View style={styles.outer}>
            <View style={styles.inner}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outer:{
        width:100,
        height:100,
        backgroundColor:'white',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    inner:{
        width:50,
        height:50,
        backgroundColor:'black',
        alignSelf:'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },

});

export default Logo;