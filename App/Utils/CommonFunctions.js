import AsyncStorage from "@react-native-async-storage/async-storage"
import I18n from '../Services/Locales'

export const apiCall = async (link , object , callback) => {
    fetch(link , object)
    .then(res => res.json())
    .then(response => {
        callback(null , response)
    })
    .catch(err => {
        console.log(err)
    })
}

export const getAsyncStorgaeValue = async key => {
    return await AsyncStorage.getItem(key)
}

export const setAsyncStorageValue = async (key,value) => {
    return await AsyncStorage.setItem(key.toString() , value.toString())
}

export const localTextTranslation = (text,code) => {
    I18n.defaultLocale = code
    I18n.locale = code
    return I18n.t(text)
}