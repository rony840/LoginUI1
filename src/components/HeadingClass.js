import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { addValue, divValue, subValue, mulValue } from '../store/redux/actions/calculatorActions';
import FormButton from './FormButton';
import withLogger from './withLogger';

class HeadingCls extends Component {
  constructor (props){
    super(props);
  }
  render() {
    return (
      <View style={styles.headerContainer}>

        <Text style={{...styles.header}}>
          {this.props.calc || 'Add Heading'}
        </Text>
        <FormButton title={'add'} onPress={()=>{
          this.props.setState('add')
          this.props.add()}}/>
        <FormButton title={'sub'} onPress={()=>this.props.sub()}/>
        <FormButton title={'mul'} onPress={()=>this.props.mul()}/>
        <FormButton title={'div'} onPress={()=>this.props.div()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    width: '100%', // Make sure it takes full width
    paddingHorizontal: 30, // Optional, for some spacing
    paddingVertical:50,
  },
  header: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center', // Center the heading text
    marginBottom: 40, // Remove any margin
  },
});

function mapStateToProps(state) {
  const {calc} = state
  return {calc: calc}
}

const mapDispatchToProps = (dispatch) => {
  return{
    add: () => dispatch(addValue()),
    sub: () => dispatch(subValue()),
    mul: () => dispatch(mulValue()),
    div: () => dispatch(divValue()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withLogger(HeadingCls));
