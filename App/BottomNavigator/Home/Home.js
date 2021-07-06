import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../Utils/colors'
import { localTextTranslation } from '../../Utils/CommonFunctions'

const Home = () => {

    return (
        <View style = {{ flex : 1 , backgroundColor : colors.WHITE }}>
            <Text>{localTextTranslation('home','en')}</Text>
        </View>
    )
}

export default Home
