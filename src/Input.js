import React from 'react'
import { View, TextInput, Text } from 'react-native'

const Input = ({label, onChange})=>{
    return (<>
    <View>
        <Outline />
        <Text>{label}</Text>
        <TextInput onChangeText={onChange}/>
    </View>
    </>)
}

const Outline = ()=>{
    return (<>
    </>)
}

export default Input