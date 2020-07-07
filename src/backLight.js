import React, { useState, memo } from 'react'
import { StyleSheet, View, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { BlurView } from '@react-native-community/blur'


const backLight = (Screen, { left, right }) => (props) => {
    const {name, address, tel_number, gender, email } = props
    const [data, setData] = useState({name, address, tel_number, gender, email })
    // console.log(data);

    return (<View style={styles.wrapper}>


        <BlurView
            style={styles.bg}
            blurType='dark'
            blurAmount={1}
            reducedTransparencyFallbackColor='white'
        />
        <StatusBar barStyle="dark-content" />
        <SafeAreaView flex={1} style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.3}
                    style={styles.leftBack}
                    onPress={props.leftAct}
                >
                    {
                        left
                    }

                    {/* <Text style={{ color: "#0B80FF", fontSize: 16, marginTop:-2}}>Contact List</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.rightAction}
                    activeOpacity={0.3}
                    onPress={()=>props.rightAct(data, props.idx)}
                >
                    {
                        right
                    }
                </TouchableOpacity>
            </View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}

            >

                <Screen {...{ ...props, setData }} />

            </ScrollView>
        </SafeAreaView>
    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        elevation: 10,
    },
    bg: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        position: 'absolute',
        left: '2%',
        right: '2%',
        top: '8%',
        bottom: '2%',
        backgroundColor: 'white',
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 2,

    },
    leftBack: {
        // flex: 1,
        flexDirection: 'row',
        // ...border
        paddingHorizontal: 3,
        paddingVertical: 1

    },
    rightAction: {
        // flex: 1,
        flexDirection: 'row',
        // ...border
        paddingHorizontal: 3,
        paddingVertical: 1

    },
    scrollView: {
        // position: 'relative'
        // flex: 1
    }
})


export default backLight