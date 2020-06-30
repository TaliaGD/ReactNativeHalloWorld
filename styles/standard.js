import {StyleSheet} from 'react-native';
import{Dimensions} from 'react-native';
export const standardStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
  
    },
  image:{
    width:200,
    height:200
  },
  mapImage:{
    width:50,
    height:30
  },
  titleText:{
      fontSize: 18,
      color: '#333'
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
  
  });