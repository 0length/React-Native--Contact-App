import React, { useState, memo } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImagePropTypes,
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'
import backLight from './backLight'
import BackIOS from './../Assets/back_ios.svg'
import BackAndroid from './../Assets/back_android.svg'
import RandomPictures from './RandomPictures';
import Input from './Input';
import { border } from './App';
// import IconPlusIOS from './../Assets/plus_ios.svg'

// interface ShowIProps {
//   people : People
// }

const Update = ({ name, tel_number, gender, address, email, setData}) => {
  // const {name, tel_number, gender, address } = data[0]
  // console.log(name, tel_number, gender, address)
  console.log("Render Update");

  return (<>

    <View style={styles.container}>
      <RandomPictures
        width={150}
        height={150}
        gender={gender}
        style={{ alignSelf: 'center', margin: 20 }}
      />
      {/* <Text style={styles.name}>{name}</Text> */}
      <View></View>
      <View style={styles.info_wrapper}>

      <View style={styles.info_container}>
          {/* <Text style={styles.infoLabel}>Telephone : </Text>
          <Text style={styles.infoValue}>{tel_number}</Text> */}
          <Input
            height={25}
            label={" Name "}
            value={name}
            keyboardType={"default"}
            onChange={(name)=>setData((old)=>({...old, name}))}
            style={{fontSize: 24}}
          />
        </View>

        <View style={styles.info_container}>
          {/* <Text style={styles.infoLabel}>Telephone : </Text>
          <Text style={styles.infoValue}>{tel_number}</Text> */}
          <Input
        height={25}
        label={"Telephone "}
        value={tel_number}
        keyboardType={"numeric"}
        onChange={(tel_number)=>setData((old)=>({...old, tel_number}))}
        style={{fontSize: 18}}
      />
        </View>
        <View style={styles.info_container}>
        <Input
          height={25}
          label={"Email "}
          value={email}
          keyboardType={"email-address"}
          onChange={(email)=>setData((old)=>({...old, email}))}
          style={{fontSize: 16}}
        />
        </View>
        <View style={styles.info_container}>
        <Input
          height={25}
          label={"Address "}
          value={address}
          keyboardType={"default"}
          onChange={(address)=>setData((old)=>({...old, address}))}
          style={{fontSize: 16}}
        />
        </View>
        <View style={styles.info_container}>
          <Picker
            selectedValue={gender}
            onValueChange={(gender)=>setData((old)=>({...old, gender}))}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
      </View>
    </View>


  </>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingHorizontal: 10,
  },
  info_wrapper: {
    marginVertical: 20,
    paddingHorizontal: 10
  },
  info_container: {
    paddingVertical: 10,
    borderTopColor: Colors.light,
    borderStyle: 'solid',
    // borderTopWidth: 1,
    marginVertical: 5
  },
  name: {
    fontSize: 24,
    textAlign: 'center'
  },
  infoLabel: {
    fontSize: 14,
    color: 'grey',
  },
  infoValue: {
    fontSize: 18,
  },

})

const Header = {
  left: [
    Platform.OS === 'ios' ? [<BackIOS
      key={0}
      width={20}
      height={20}
      style={{ transform: [{ rotate: '0deg' }] }}

    />,
    <Text key={1} style={{ color: "#0B80FF", fontSize: 16, marginTop: 0, marginLeft: -0.5 }}>Back</Text>
    ] : <BackAndroid
        key={0}
        width={20}
        height={20}
        style={{ transform: [{ rotate: '0deg' }] }}

      />],
  right: [
    Platform.OS == 'ios' ? <Text key={0} style={{ color: "#0B80FF", fontSize: 16, marginTop: 0, marginLeft: -0.5 }}>Save  </Text>
    :<Text key={0} style={{ color: "black", fontSize: 16, elevation:12  }}>Save  </Text>
  ]
}

export default backLight(Update, Header);
