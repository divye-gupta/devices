import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import {NativeRouter, Route, Routes, Link} from 'react-router-native';

import Home from './Home';
import Profile from './Profile';
import Notifications from './Notifications';
import Form from './Form';
import Faq from './Faq';

function Navbar() {
  return (
    
      <NativeRouter>
        <View style={styles.container}>
          
          <ScrollView style={styles.routecon}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Notifications" element={<Notifications />} />
              <Route exact path="/Form" element={<Form />} />
              <Route exact path="/Profile" element={<Profile />} />
            </Routes>
          </ScrollView>
          
          
          
          <View style={styles.navcontainer}>
            <Link to="/">
              <>
                <FontAwesome style={styles.iconStyle} icon={SolidIcons.home} />
                <Text style={{color: 'black'}}>Home</Text>
              </>
            </Link>

            <Link to="/Form">
              <>
                <FontAwesome
                  style={styles.iconStyle}
                  icon={SolidIcons.plusCircle}
                />
                <Text style={{color: 'black'}}>Add</Text>
              </>
            </Link>

            <Link to="/Notifications">
              <>
                <FontAwesome style={styles.iconStyle} icon={SolidIcons.bell} />
                <Text style={{color: 'black'}}>Notifications</Text>
              </>
            </Link>

            <Link to="/Profile">
              <>
                <FontAwesome style={styles.iconStyle} icon={SolidIcons.user} />
                <Text style={{color: 'black'}}>Profile</Text>
              </>
            </Link>
          </View>
        </View>
      </NativeRouter>

  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'black',
  },
  navcontainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    backgroundColor: '#3F72AF',
    // height:'20%'
  },
  container: {
    backgroundColor: '#F9F7F7',
    height:Dimensions.get('window').height
  },
  routecon:{
    height:Dimensions.get('window').height- 120,
    // height:'98%'
  }
});

export default Navbar;
