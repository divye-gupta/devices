import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {Auth, Hub} from 'aws-amplify';

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

const initialFormState = {
  initializer:'',
  formType: 'signIn',
};

const App = () => {
  const [formState, updateFormState] = useState(initialFormState);
  const [username, updateUsername] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [phone_number, updatePhone_number] = useState('');
  const [authCode, updateAuthCode] = useState('');
  
  //  add separate designed setState to specific function and use e.target.value as parameter for the setState

  const [user, updateUser] = useState(null);
  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  async function setAuthListener() {
    Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signOut':
          console.log('Data from event:', data);
          updateFormState(() => ({...formState, formType: 'signIn'}));
          break;

        default:
          break;
      }
    });
  }

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user);
      console.log('user:', user);
      updateFormState(() => ({...formState, formType: 'SignedIn'}));
    } catch (err) {
      console.log(err);
    }
  }

  function onChangeeventusername(text) {
    updateUsername(text);
  }
  function onChangeeventemail(text) {
    // e.persist();
    updateEmail(text)
  }
  function onChangeeventpassword(text) {
    // e.persist();
    updatePassword(text)
  }
  function onChangeeventphone_number(text) {
    // e.persist();
    updatePhone_number(text)
  }
  function onChangeeventauthCode(text){
    // e.persist();
    console.log(text)
    updateAuthCode(text)
  }
  
  const {formType} = formState;

  async function signUp() {
    const response = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
      },
    });
    console.log(username, password, phone_number, email)
    console.log(response)
    updateFormState(() => ({...formState, formType: 'confirmSignUp'}));
  }

  async function signIn() {
    await Auth.signIn(
      email,
      password
    );
    updateFormState(() => ({...formState, formType: 'SignedIn'}));
  }

  async function confirmSignUp() {
    console.log(authCode)
    await Auth.confirmSignUp(
      username,
      authCode
    );
    updateFormState(() => ({...formState, formType: 'signIn'}));
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          {formType === 'signUp' && (
            <View style={styles.screen}>
              <View style={styles.logo}>
                <Image
                  source={require('./assets/logo.jpg')}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={styles.headcontainer1}>
                <Text style={styles.texthead}>Sign Up</Text>
              </View>

              <View style={styles.headcontainer}>
                <TextInput
                  name="username"
                  onChangeText={(text)=> onChangeeventusername(text)}
                  style={styles.tbox}
                  placeholderTextColor="#3F72AF"
                  placeholder="Username"
                />
                <TextInput
                  name="email"
                  onChangeText={(text)=> onChangeeventemail(text)}
                  style={styles.tbox}
                  placeholderTextColor="#3F72AF"
                  placeholder="Email"
                />
                <TextInput
                  name="phone_number"
                  onChangeText={(text)=> onChangeeventphone_number(text)}
                  style={styles.tbox}
                  placeholderTextColor="#3F72AF"
                  placeholder="Phone Number"
                />
                <TextInput
                  name="password"
                  onChangeText={(text)=> onChangeeventpassword(text)}
                  style={styles.tbox}
                  placeholderTextColor="#3F72AF"
                  secureTextEntry={true}
                  placeholder="Create Password"
                />
              </View>

              <View style={styles.headcontainer2}>
                <Button onPress={signUp} color="#112D4E" title="SignUp" />
              </View>
              <View style={styles.headcontainer1}>
                <Text style={styles.text}>
                  Already Registered?
                  <TouchableOpacity
                    onPress={() =>
                      updateFormState(() => ({
                        ...formState,
                        formType: 'signIn',
                      }))
                    }>
                    <Text style={styles.text}> SignIn</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          )}

          {formType === 'signIn' && (
            <View style={styles.screen}>
              <View style={styles.logo}>
                <Image
                  source={require('./assets/logo.jpg')}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={styles.headcontainer}>
                <Text style={styles.texthead}>Sign In</Text>
              </View>

              <View style={styles.headcontainer1}>
                <TextInput
                  name="email"
                  onChangeText={(text)=> onChangeeventemail(text)}
                  style={styles.tbox}
                  placeholderTextColor="#3F72AF"
                  placeholder="email"
                />
                <TextInput
                  name="password"
                  onChangeText={(text)=> onChangeeventpassword(text)}
                  style={styles.tbox}
                  secureTextEntry={true}
                  placeholderTextColor="#3F72AF"
                  placeholder="password"
                />
              </View>

              <View style={styles.headcontainer2}>
                <Button onPress={signIn} color="#112D4E" title="Login" />
              </View>

              <View style={styles.headcontainer1}>
                <Text style={styles.text}>
                  Not Registered?
                  <TouchableOpacity
                    onPress={() =>
                      updateFormState(() => ({
                        ...formState,
                        formType: 'signUp',
                      }))
                    }>
                    <Text style={styles.text}> SignUp</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          )}

          {formType === 'confirmSignUp' && (
            <View>
              <TextInput
                name="username"
                onChangeText={(text)=> onChangeeventusername(text)}
                style={styles.tbox}
                placeholderTextColor="#3F72AF"
                placeholder="username"
              />
              <TextInput
                name="authCode"
                onChangeText={(text)=> onChangeeventauthCode(text)}
                style={styles.tbox}
                placeholderTextColor="#3F72AF"
                placeholder="authCode"
              />
              <Button onPress={confirmSignUp} title="Confirm SignUp" />
            </View>
          )}

          {formType === 'SignedIn' && (
            <View>
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

                <Navbar />
              </>
              <Button onPress={() => Auth.signOut()} title="Sign Out" />
            </View>
          )}
        </View>
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
