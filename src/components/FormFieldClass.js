import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class FormFieldCls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = (text) => {
        this.setState({ text });
        if (this.props.onChange) {
            this.props.onChange(text); // Pass the updated text to parent component if onChange prop exists
        }
    };

    render() {
        const { title, placeholder } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.frmLabel}>{title || "Enter a Label"}</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={this.handleChangeText}
                    placeholder={placeholder || "Enter your placeholder"}
                    placeholderTextColor="#d9d8d7"
                    secureTextEntry={false}
                    style={styles.txtInput}
                    value={this.state.text}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        height: 85,
        marginBottom: 20,
        marginLeft: '5%',
        marginRight: '5%',
    },
    frmLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginLeft: 15,
    },
    txtInput: {
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

export default FormFieldCls;
