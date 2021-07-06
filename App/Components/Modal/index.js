import React from 'react'
import Modal from 'react-native-modal'
import { modalAnimations } from '../../Constants/modalAnimations'

const ModalComponent = ({ isModalVisible, onBackdropPress, children, ...props }) => {
    
    const { animationIn , animationOut, animationInTiming , animationOutTiming } = props
    const customProps = {
        animationIn: animationIn ? animationIn : modalAnimations.slideInUp,
        animationOut: animationOut ? animationOut : modalAnimations.slideOutDown,
        animationInTiming: animationInTiming ? animationInTiming : 300,
        animationOutTiming: animationOutTiming ? animationOutTiming : 300
    }

    return (
        <Modal
            isVisible = {isModalVisible}
            onBackdropPress = {onBackdropPress}
            animationIn = {customProps.animationIn}
            animationInTiming = {customProps.animationInTiming}
            animationOut = {customProps.animationOut}
            animationOutTiming = {customProps.animationOutTiming}
        >
            {children}
        </Modal>
    )
}

export default ModalComponent