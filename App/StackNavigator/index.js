import React from 'react'
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack'
import SplashScreen from './SplashScreen/SplashScreen'
import Home from '../BottomNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode = 'none'
            screenOptions = {{
                cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS
            }}
        >
            <Stack.Screen name = 'SplashScreen' component = {SplashScreen} />
            <Stack.Screen name = 'HomeScreen' component = {Home} />
        </Stack.Navigator>
    )
}

export default StackNavigator