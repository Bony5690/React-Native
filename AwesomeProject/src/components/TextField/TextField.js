import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const textField = (props) => (
    <View>
     <TextInput
     placeholder="An awesome place"
     onChangeText={props.changeText}
     value={props.value}
     style={styles.placeInput}/>
    </View>
)


const styles = StyleSheet.create({
    placeInput:  {
        width: "70%"
        },
  
})

export default textField;