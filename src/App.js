import React, { useState, useCallback } from 'react';
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

import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import DummyPeople from './DummyPeople'
import IconPlus from './../Assets/plus.svg'
import IconPlusIOS from './../Assets/plus_ios.svg'
import List from './List'
import Show from './Show'

// export interface People {
//   name: string
//   tel_number: string
//   gender: "male" | "female"
// }

const App: () => React$Node = () => {

  const [peoples, setPeoples] = useState({ data: {...DummyPeople} })
  const [selected, setSelected] = useState({ data: {} })
  const [screen, setScreen] = useState('')

  const select = useCallback((data)=>{
    setSelected((old)=>({...old, data}))
  }, [setSelected])

  const handlePerItem = useCallback((data, screen: 'show'|'update'|'')=>{
    select(data)
    setScreen(screen)
  }, [select, setScreen])

  // const handleOnHold = useCallback(()=>{

  // }, [])

  // const handleOnUpdate = useCallback(()=>{
  //   setScreen('update')
  // },[])
  const SlideUp = ()=>{
    const screens = {
      'show': <Show {...{...selected.data}}/>,
      'update': <Show {...{...selected.data}}/>
    }
    return screens[screen]
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView flex={1}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Contact App</Text>
            {
              Platform.OS == 'ios' ? <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert("Touch IOS")}
                style={styles.iosTouchableFab}
              >
                <IconPlusIOS style={styles.iosImageFab} backgroundColor={"black"} height={styles.iosImageFab.height} width={styles.iosImageFab.width} />

              </TouchableOpacity> : null
            }
          </View>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <List peoples={peoples} onPress={handlePerItem}/>
          </View>
        </ScrollView>
        {
          Platform.OS !== 'ios' ?
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => alert("Touch")}
              style={styles.androidTouchableFab}
            >

              <IconPlus style={styles.androidImageFab} height={styles.androidImageFab.height} width={styles.androidImageFab.width} />
            </TouchableOpacity>
            :
            null
        }
        {
          screen ?<SlideUp />:null
        }
      </SafeAreaView>
    </>
  );
};


const border = {
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: 1,
}
export {border}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: '#f3f3f3',
    padding: 2
  },
  header: {
    paddingVertical: 12,
    paddingTop: Platform.OS !== 'ios' ? 12 : 0,
    backgroundColor: Platform.OS !== 'ios' ? 'gray' : 'white',

  },
  headerContainer: {
    padding: 0,
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Platform.OS == 'ios' ? 'black' : 'white',
    alignSelf: Platform.OS == 'ios' ? 'center' : 'auto',
  },
  androidTouchableFab: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  androidImageFab: {
    width: 25,
    height: 25,
  },
  iosTouchableFab: {

    position: 'absolute',
    width: 50,
    height: 50,
    right: -10,
    top: 5,
    borderRadius: 50,

  },
  iosImageFab: {
    width: 20,
    height: 20,
  }
});

export default App;
