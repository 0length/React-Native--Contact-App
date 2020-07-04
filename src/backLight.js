import React from 'react'
import { StyleSheet, View } from 'react-native'

const backLight = (Screen) => (props) => {

    return (<View style={styles.wrapper}>
        <View style={styles.bg} />
        <Screen {...{...props }} />
    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    bg: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        // flex: 0,
        backgroundColor: '#000000',
        opacity: 0.7,
    }

})
export default backLight