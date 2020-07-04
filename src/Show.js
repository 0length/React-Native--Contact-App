import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native';
import { People } from './App'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import backLight from './backLight';
// import IconPlus from './../Assets/plus.svg'
// import IconPlusIOS from './../Assets/plus_ios.svg'

// interface ShowIProps {
//   people : People
// }

const Show: React.FC<People> = ({name, tel_number, gender}) => {
  return (<>

  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    // style={styles.scrollView}
    >
    <View style={styles.body}>
    <Text style={styles.headerTitle}>Contact App {name, tel_number, gender}</Text>
    </View>
  </ScrollView>
  </>)
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
  },
  body: {
    padding: 2
  }

})
export default backLight(Show);
