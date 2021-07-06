import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Main from './App/StackNavigator'
import colors from './App/Utils/colors'
import { StateProvider } from './App/Services/StateProvider'
import reducer , { initialState } from './App/Services/reducer'

const App = () => {
  return (
    <StateProvider initialState = {initialState} reducer = {reducer}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <NavigationContainer>
        <StatusBar barStyle = 'dark-content' backgroundColor = {colors.WHITE} />
        <Main />
      </NavigationContainer>
      </SafeAreaView>
    </StateProvider>
  );
};

export default App;
