/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RandomPictures from './RandomPictures'
import DummyPeople from './DummyPeople'

const App: () => React$Node = () => {

  const [peoples, setPeoples] = useState({data: [...DummyPeople]})

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.header}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Contact App</Text>
            </View>
      </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          {
            peoples.data.map(({name, gender, tel_number},idx)=><View key={idx} style={styles.sectionContainer}>
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
            </View>)
          }
          </View>
        </ScrollView>
        {
          Platform.OS !== 'ios' ? 
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>alert("Touch")}
              style={styles.androidTouchableFab}
            >
              <Image

                source={{uri: 'https://i.ya-webdesign.com/images/plus-icon-png-black-8.png'}}
                style={styles.androidImageFab}
              />
            </TouchableOpacity>
            :
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>alert("Touch IOS")}
              style={styles.iosTouchableFab}
            >
              <Image

                source={{uri: 'https://i.ya-webdesign.com/images/plus-icon-png-black-8.png'}}
                style={styles.iosImageFab}
              />
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    marginTop: 32,
    // backgroundColor: '#333333',
    // display: 'flex',
    // flex:'1'
    // marginBottom: 0
  },
  body: {
    backgroundColor: '#f3f3f3',
    // paddingVertical: 35
    padding: 2
  },
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
    // margin: 2.5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection:'column',
    // ...border,
  },
  sectionCol1: {
    // padding: 0,
    // margin: 0,
    // margin: 2.5,
    // paddingHorizontal: 2.5,
    flex: 0,
    justifyContent: "center",
    alignContent: "center",
    // ...border,
  },
  sectionImage: {
    width: 50,
    height: 50
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    // ...border,
    // // flex:2
    // width: '40%',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
    // ...border,
    // width: '40%',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  header: {
    backgroundColor: Colors.white,
    // justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 'auto'
    // borderWidth: 1,
  },
  headerContainer: {
    // flex: 1,
    // flexDirection: "row",
    // padding: 24,
    // marginTop: 6,
    padding: 0,
    paddingHorizontal: 24,
    // borderColor: 'black',
    // borderStyle: 'solid',
    // // borderWidth: 1,
    // textAlign: Platform.OS =='ios'?'center':'left'
    justifyContent: 'center',
    textAlignVertical: "center",
    alignSelf: 'center'
  },
  headerTitle: {
    textAlign: Platform.OS =='ios'?'center':'left',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    
    alignSelf: 'center'
  },
  androidTouchableFab: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 50,
    backgroundColor: 'gray',
    borderRadius: 50
  
  },
  androidImageFab: {
    // resizeMode: 'contain',
    width: 25,
    height: 25,
    // backgroundColor: 'black',
  },
  iosTouchableFab: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    top: 10,
    // backgroundColor: 'gray',
    borderRadius: 50
  
  },
  iosImageFab: {
    // resizeMode: 'contain',
    width: 20,
    height: 20,
    // backgroundColor: 'black',
  }
});

export default App;
