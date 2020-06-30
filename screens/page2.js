import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import{standardStyles} from '../styles/standard';
import MapView, {Marker} from 'react-native-maps';



export default function Page2(){
    
  return (
        <MapView style ={standardStyles.map}
        initialRegion={{
            latitude: 50.8373171,
            longitude: 4.404716,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }}>
          <MapView.Marker coordinate = {{latitude: 50.8373171, longitude: 4.404716}}>
          <Image source={require('../assets/logo.png')}
          style={standardStyles.mapImage}
          />
          </MapView.Marker>
         
        </MapView>
    
  );
};



