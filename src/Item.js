import React, { memo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import RandomPictures from './RandomPictures'
import { border } from './App'

const Item = ({ idx, name, tel_number, gender, onPress }) => {


    return (<TouchableOpacity activeOpacity={0.7}
        onPress={() => onPress(idx, 'show')}
        key={idx} style={styles.sectionContainer}
    >
        <View style={styles.sectionCol1}>
            <RandomPictures
                width={styles.sectionImage.width}
                height={styles.sectionImage.height}
                gender={gender}
            />
        </View>
        <View style={styles.sectionCol2}>
            <Text style={styles.sectionTitle}>{name}</Text>
            <Text style={styles.sectionDescription}>
                {tel_number}
            </Text>
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    sectionContainer: {
        margin: 2.5,
        marginHorizontal: 2.5,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 3,
    },
    sectionCol2: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
        // ...border
    },
    sectionCol1: {
        flex: 0,
        justifyContent: "center",
        alignContent: "center",
    },
    sectionImage: {
        width: 50,
        height: 50
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black,
        // ...border
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.dark,
        // ...border
    },
})
export default memo(Item)