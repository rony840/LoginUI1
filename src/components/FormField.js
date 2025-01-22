import {View,Text,StyleSheet, TextInput} from 'react-native';

const FormInput = props => {
    const {title,onChange,placeholder,value1} = props;
    return(
        <View style={styles.container}>
            <Text style={{...styles.frmLabel}}>{title||"Enter a Label"}</Text>
            <TextInput
              value={value1}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={onChange}
              placeholder={placeholder||"Enter your placeholder"}
              placeholderTextColor="#d9d8d7"
              secureTextEntry={false}
              style={{...styles.txtInput}}
               />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:20,
        padding:10,
        height: 85,
        marginBottom: 20,
        marginLeft:'5%',
        marginRight:'5%',

    },
    frmLabel:{
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginLeft: 15,
    },
    txtInput:{
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 20,
        fontWeight: '800',
        color: '#222',
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
        marginBottom: 20,
        placeholderTextColor: 'white',
    },
});

export default FormInput;