import { useNavigation } from '@react-navigation/native'
import React , { useEffect } from 'react'
import { View, Text, BackHandler } from 'react-native'
import Application from '../../Utils/db/Application'

const SplashScreen = () => {

    const navigation = useNavigation()

    const handleBackButtonClick = () => {
        BackHandler.exitApp()
        return true
    }

    useEffect(() => {
        const backButtonAction = BackHandler.addEventListener('hardwareBackPress' , handleBackButtonClick)
        
        const db = async () => {
            await Application.openDatabase()
            setTimeout(() => {
                navigation.replace('HomeScreen')
            }, 1000)
        }
        db()

        return () => backButtonAction.remove()
    },[])

    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}

export default SplashScreen
