import React, {useState, memo} from 'react';
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
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import backLight from './backLight';
import BackIOS from './../Assets/back_ios.svg';
import BackAndroid from './../Assets/back_android.svg';
import RandomPictures from './RandomPictures';
// import IconPlusIOS from './../Assets/plus_ios.svg'

// interface ShowIProps {
//   people : People
// }
function showPropsAreEqual(prevProps, nextProps) {
  return (
    prevProps.name === nextProps.name &&
    prevProps.tel_number === nextProps.tel_number
  );
}

const Show = ({name, tel_number, gender, address, email}) => {
  // const {name, tel_number, gender, address } = data[0]
  console.log(name, tel_number, gender, address);
  // console.log("Render Show"+name);

  return (
    <>
      <View style={styles.container}>
        <RandomPictures
          width={150}
          height={150}
          gender={gender || 'male'}
          style={{alignSelf: 'center', margin: 20}}
        />
        <Text style={styles.name}>{name}</Text>
        <View></View>
        <View style={styles.info_wrapper}>
          <View style={styles.info_container}>
            <Text style={styles.infoLabel}>Telephone </Text>
            <Text style={styles.infoValue}>{tel_number}</Text>
          </View>
          <View style={styles.info_container}>
            <Text style={styles.infoLabel}>Mail </Text>
            <Text style={styles.infoValue}>{email}</Text>
          </View>
          <View style={styles.info_container}>
            <Text style={styles.infoLabel}>Address </Text>
            <Text style={styles.infoValue}>{address}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingHorizontal: 10,
  },
  info_wrapper: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  info_container: {
    paddingVertical: 10,
    borderTopColor: Colors.light,
    borderStyle: 'solid',
    borderTopWidth: 1,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: 'grey',
  },
  infoValue: {
    fontSize: 18,
  },
});

const Header = {
  left: [
    Platform.OS === 'ios' ? (
      [
        <BackIOS
          key={0}
          width={20}
          height={20}
          style={{transform: [{rotate: '0deg'}]}}
        />,
        <Text
          key={1}
          style={{
            color: '#0B80FF',
            fontSize: 16,
            marginTop: 0,
            marginLeft: -0.5,
          }}>
          Back
        </Text>,
      ]
    ) : (
      <BackAndroid
        key={0}
        width={20}
        height={20}
        style={{transform: [{rotate: '0deg'}]}}
      />
    ),
  ],
  right: [
    Platform.OS === 'ios' ? (
      <Text
        key={0}
        style={{
          color: '#0B80FF',
          fontSize: 16,
          marginTop: 0,
          marginLeft: -0.5,
        }}>
        Edit{' '}
      </Text>
    ) : (
      // null
      <Image
        key={0}
        // width={15}
        // height={15}
        source={require('./../Assets/ic_edit.png')}
        style={{height: 16, width: 16}}
      />
    ),
  ],
};

export default backLight(Show, Header);
