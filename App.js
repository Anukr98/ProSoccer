import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import colors from './App/Utils/colors'
import SplashScreen from './App/SplashScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <StatusBar barStyle = 'dark-content' backgroundColor = {colors.WHITE} />
      <SplashScreen />
    </SafeAreaView>
  );
};

export default App;
