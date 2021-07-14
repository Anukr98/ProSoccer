import React , { useEffect } from 'react'
import { View, Text, BackHandler, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import colors from './Utils/colors'
import { width } from './Constants/dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const CARDS = [
    { id: 0, label: `CHANGE
LINE UP`, icon: 'swap-vertical' },
    { id: 1, label: 'SCORED', icon: 'soccer'},
    { id: 2, label: 'CONCEDED', icon: 'soccer'},
    { id: 3, label: `RED
CARD`, icon: 'card'},
    { id: 4, label: 'FULL TIME', icon: 'whistle'},
]

const DETAIL_CARD = [
    { detail: '12:46 Goal Scored', icon: 'soccer', displayEditIcon: true },
    { detail: '12:40 Kick off', icon: 'soccer', displayEditIcon: false },
    { detail: '12:40 Starting squad', icon: 'swap-vertical', displayEditIcon: false },
]

const SplashScreen = () => {

    const handleBackButtonClick = () => {
        BackHandler.exitApp()
        return true
    }

    useEffect(() => {
        const backButtonAction = BackHandler.addEventListener('hardwareBackPress' , handleBackButtonClick)
        return () => backButtonAction.remove()
    },[])

    const TeamScore = ({ description, score, detail }) => (
        <View style = {styles.teamDetail}>
            <View style = {styles.teamName}><Text style = {{ color: colors.WHITE, fontWeight: 'bold', fontSize: 20 }}>{description}  </Text><Text style = {{ color: colors.WHITE, fontWeight: '600', fontSize: 17 }}>{detail}</Text></View>
            <View style = {{ flex: .2, alignItems: 'center' }}>
                <View style = {{ backgroundColor: '#000000a0', width: 30, height: 30, justifyContent: 'center', alignItems: 'center'  }}>
                    <Text style = {{ color: colors.WHITE, fontWeight: 'bold' }}>{score}</Text>
                </View>
            </View>
        </View>
    )

    const CardComponent = ({ label, icon }) => <View style = {styles.cardContainer}>
        <View><MaterialCommunityIcons name = {icon} style = {{ fontSize: 20, color: icon === 'card' ? 'red' : 'black' }} /></View>
        <View><Text style = {styles.cardText}>{label}</Text></View>
    </View>

    const DetailCard = ({ text, icon, displayEditIcon }) => <View style = {styles.detailCard}>
        <View style = {styles.detailIconContainer}><MaterialCommunityIcons name = {icon} style = {styles.detailIcon} /></View>
        <View style = {styles.detailsCard}>
            <View style = {{ width: '80%' }}><Text style = {styles.detailText}>{text}</Text></View>
            <View style = {{ flexDirection: 'row', alignItems: 'center', width: '20%', justifyContent: displayEditIcon ? 'space-evenly' : 'flex-end', paddingRight: displayEditIcon ? 0 : '3%' }}>
                <View style = {{ display: displayEditIcon ? 'flex' : 'none' }}><FontAwesome name = 'edit' style = {styles.detailIcon} /></View>
                <View><Ionicons name = 'close' style = {styles.detailIcon} /></View>
            </View>
        </View>
    </View>

    const Body = () => <View style = {{ paddingHorizontal: 20, paddingTop: 24 }}>
        <View style = {styles.titleContainer}>
            <View><Text style = {{ fontSize: 22, color: colors.ROYAL_BLUE, fontWeight: 'bold' }}>Game Timeline</Text></View>
            <View><TouchableOpacity><Ionicons name = 'ellipsis-horizontal' style = {{ fontSize: 22, color: colors.ROYAL_BLUE, transform: [{translateY: 3}] }} /></TouchableOpacity></View>
        </View>
        <View style = {{ marginTop: 7 }}><Text style = {{ color: colors.GRAY, fontSize: 16 }}>Log all of the in game events</Text></View>
        <View style = {{ marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {CARDS.map(item => <CardComponent key = {item.id} label = {item.label} icon = {item.icon} />)}
        </View>
        <View style = {{ marginTop: '8%', flexDirection: 'row', alignItems: 'center' }}>
            <View style = {styles.emptyView}><Text style = {{ color: colors.WHITE, opacity: 0 }}>h</Text></View>
            <View style = {{ width: '40%', alignItems: 'center' }}><Text style = {styles.addEventText}>Add a new event</Text></View>
            <View style = {styles.emptyView}><Text style = {{ color: colors.WHITE, opacity: 0 }}>h</Text></View>
        </View>
        <View style = {{marginTop: '8%', alignItems: 'center' }}>
            <View style = {{ width: '97%' }}>
                {
                    DETAIL_CARD.map((item,index) => <DetailCard key = {index} text = {item.detail} icon = {item.icon} displayEditIcon = {item.displayEditIcon} />)
                }
            </View>
        </View>
    </View>

    return (
        <View style = {{ flex: 1, backgroundColor: colors.WHITE }}>
            <View style = {styles.container}>
                <ScrollView>
                    <View style = {styles.header}>
                        <Image source = {require('../assets/Images/banner.png')} resizeMode = 'cover' style = {{ width }} />
                        <View style = {styles.floatingHeader}>
                            <View style = {styles.logoArea}>
                                <View style = {{ flex: 1 }}><Text style = {styles.logoText}>ProScore</Text><Text style = {styles.logoText}>Soccer</Text></View>
                                <View style = {{ flex: 1 , alignItems: 'flex-end' }}><TouchableOpacity activeOpacity = {.7}><Ionicons name = 'ios-menu' style = {{ color: colors.WHITE, fontSize: 30 }} /></TouchableOpacity></View>
                            </View>
                            <View style = {{ marginTop: 40 }}>
                                <TeamScore description = {'Arizona Arsenal '} detail = {'U16\'s'} score = {2} />
                                <TeamScore description = {'Phoenix Premier '} detail = {'U16\'s'} score = {2} />
                            </View>
                        </View>
                    </View>
                    <Body />
                </ScrollView>
            </View>
            <View style = {styles.submitButtonContainer}>
                <Pressable
                    android_ripple = {{
                        color: '#ffffff20',
                    }}
                    style = {styles.submitButton}
                >
                    <Text style = {{ color: colors.WHITE, fontSize: 16, fontWeight: 'bold' }}>SUBMIT</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({

    container: {
        width: width,
        flex: 1,
        marginBottom: '15%'
    },

    header: {
        width,
        position: 'relative',
    },

    floatingHeader: {
        width: '100%',
        position: 'absolute',
        top: '10%',
        left: 0,
        paddingHorizontal: 20
    },

    logoText: {
        fontSize: 18,
        color: colors.WHITE,
        fontWeight: 'bold'
    },

    logoArea: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    teamDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    teamName: {
         flex: .8,
         flexDirection: 'row',
         alignItems: 'center'
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardText: {
        fontSize: 10,
        color: colors.ROYAL_BLUE,
        fontWeight: 'bold'
    },

    cardContainer: {
        elevation: 7,
        backgroundColor: colors.WHITE,
        width: 60,
        height: 80,
        shadowColor: '#000000b0',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 3,
        borderRadius: 2
    },

    emptyView: {
        backgroundColor: colors.LIGHT_GRAY,
        width: '30%',
        height: 1.5
    },

    addEventText: {
        color: '#c1c4d4',
        fontSize: 18
    },

    detailCard: {
        flexDirection: 'row',
        marginBottom: '5%',
        alignItems: 'center'
    },

    detailIconContainer: {
        borderRadius: 999,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        marginRight: '5%',
        backgroundColor: colors.WHITE
    },

    detailsCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        elevation: 3,
        borderRadius: 3,
        paddingLeft: '5%',
        paddingVertical: '4%',
        backgroundColor: colors.WHITE,
        shadowColor: '#000000b0'
    },

    detailText: {
        color: colors.ROYAL_BLUE,
        fontWeight: 'bold',
        fontSize: 16
    },

    detailIcon: {
        color: colors.ROYAL_BLUE,
        fontSize: 16
    },

    submitButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width
    },

    submitButton: {
        backgroundColor: colors.ROYAL_BLUE,
        width: '100%',
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    }
})