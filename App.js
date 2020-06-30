import { AppLoading } from 'expo';
import Navigator from './routes/HomeStack';
import { registerRootComponent} from 'expo';
import React from 'react';


export default function App(){
  
    return(
      <Navigator />
    )
  
}
registerRootComponent(App);