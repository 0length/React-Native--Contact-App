import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import Svg, { Rect } from 'react-native-svg'
import { Colors } from 'react-native/Libraries/NewAppScreen'
// import {} from 'react-native-reanimated'

const Input = ({label, onChange, height, value, keyboardType, style})=>{
    return (<>
    <View>
        <Outline height={height} />
        <View style={{marginTop: -(34.5+height), paddingVertical: '0.8%', paddingHorizontal: '1.6%'}}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <Text style={{backgroundColor: 'white', alignItems: 'center', color: "grey"}}>{label}</Text>
        </View>
        <TextInput
            keyboardType={keyboardType} value={value} onChangeText={onChange}
            style={[styles.textInput, {...style}]}
        />
        </View>
    </View>
    </>)
}

const Outline = ({height})=>{
    return (<Svg width="100%" height={height+20}>
    <Rect
        // x="25"
        // y="5"
        width="100%"
        height={height+15}
        // fill="rgb(0,0,255)"
        // strokeDashoffset="75"
        strokeWidth="1"
        strokeOpacity="0.5"
        // strokeDasharray={['370']}
        stroke={"grey"}
        rx="3"
    /></Svg>)
}

const styles= StyleSheet.create({
    textInput: {
        fontSize: 24,
        backgroundColor: "#fff",
        paddingVertical: 0,
        color: '#49494A'
    }
})

export default Input