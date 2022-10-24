
import { StyleSheet, Text, View, Image} from 'react-native';
import React from "react";

import Navigation from './src/navigation';

const App = () => {
  return (
    <Navigation />
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
export default App;