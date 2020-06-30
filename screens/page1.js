import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import{standardStyles} from'../styles/standard';


export default function Page1({navigation}){
const buttonHandeler = () =>{
    navigation.navigate('Page2');
}
  return (
    <View style={standardStyles.container}>
      <Text style={standardStyles.titleText}>Hallo World!</Text>
     
      <TouchableOpacity      onPress={()=>Alert.alert('dude it is just an image, why klick on it :p')}>
      <Image style={standardStyles.image} 
      source={require('../assets/olijfgroen.png')} />
      
      
      </TouchableOpacity>

      <Button 
      title="Klick and see"
      onPress={()=>Alert.alert('tss you presed the button, I knew you would')}
      />
      <Button
      title="Is this the button to the Map"
      onPress={buttonHandeler}
      />
    </View>
  )
}


