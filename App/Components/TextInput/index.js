import React from 'react'
import { TextInput } from 'react-native'

const TextInputComponent = ({ onChange, value, style, placeHolder, ...props }) => {
    console.log(props)
    return (
        <TextInput
            onChangeText = {text => onChange(text)}
            value = {value}
            style = {style}
            placeholder = {placeHolder}
        />
    )
}

export default TextInputComponent