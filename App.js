import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Navbar from './Navbar';
import Form from './Form';
import Faq from './Faq';
import ContactUs from './ContactUs';
import Home from './Home';
import Profile from './Profile';
import Products from './Products';
import Device from './Device';
import Notifications from './Notifications';
import {NativeRouter, Route, Routes, Link} from 'react-router-native';

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <> 

         {/* <Device/>  */}
         {/* <Products/>  */}
         {/* <ContactUs/>  */}
         {/* <Faq/>  */}
         {/* <Home/>  */}
         {/* <Profile/>  */}
         {/* <SignUp />  */}
         {/* <SignIn />  */}
         {/* <Form />  */}

         <Navbar/> 
        </>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'white',
  },
});

export default App;
