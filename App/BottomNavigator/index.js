import React from 'react'
import { Image , View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home/Home'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen
                name = 'Home'
                component = {Home}
                options = {{
                    title : "Home",
                    unmountOnBlur : true,
                    // tabBarIcon: ({ focused, color, size }) => {
                    //     return (
                    //         focused ? <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderTopWidth: 2 }}><Image source={require('../../assets/Images/Home.png')} style={{ tintColor: '#000000', width: '20%', height: '50%', resizeMode: 'contain' }} /></View> : <Image source={require('../../assets/Images/Home.png')} style={{ width: '20%', height: '50%', resizeMode: 'contain', tintColor: '#939393' }} />
                    //     )
                    // },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator