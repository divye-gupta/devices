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
  Dimensions,
} from 'react-native';

import {Auth, Hub} from 'aws-amplify';

import SignUp from './SignUp';
import SignIn from './SignIn';

const initialFormState = {
  username: '',
  email: '',
  password: '',
  phone_number: '',
  authCode: '',
  formType: 'signIn',
};

function Testfile() {
  const [formState, updateFormState] = useState(initialFormState);
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

  function onChange(e) {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}));
  }
  const {formType} = formState;

  async function signUp() {
    const {username, email, password, phone_number} = formState;
    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
      },
    });
    updateFormState(() => ({...formState, formType: 'confirmSignUp'}));
  }

  async function signIn() {
    const {username, password} = formState;
    await Auth.confirmSignUp({
      username,
      password,
    });
    updateFormState(() => ({...formState, formType: 'SignedIn'}));
  }

  async function confirmSignUp() {
    const {username, authCode} = formState;
    await Auth.confirmSignUp({
      username,
      authCode,
    });
    updateFormState(() => ({...formState, formType: 'signIn'}));
  }

  return (
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
              style={styles.tbox}
              placeholderTextColor="#3F72AF"
              placeholder="username"
            />
            <TextInput
              style={styles.tbox}
              placeholderTextColor="#3F72AF"
              placeholder="email"
            />
            <TextInput
              style={styles.tbox}
              placeholderTextColor="#3F72AF"
              placeholder="phone_number"
            />
            <TextInput
              style={styles.tbox}
              placeholderTextColor="#3F72AF"
              secureTextEntry={true}
              placeholder="password"
            />
          </View>

          <View style={styles.headcontainer2}>
            <Button onPress={signUp} color="#112D4E" title="SignUp" />
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
              style={styles.tbox}
              placeholderTextColor="#3F72AF"
              placeholder="email"
            />
            <TextInput
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
                  updateFormState(() => ({...formState, formType: 'signUp'}))
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
            name="authCode"
            style={styles.tbox}
            placeholderTextColor="#3F72AF"
            placeholder="Confirmation Code"
          />
          <TextInput
            name="authCode"
            style={styles.tbox}
            placeholderTextColor="#3F72AF"
            placeholder="Confirmation Code"
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

            {/* <Navbar/>  */}
          </>
          <Button onPress={() => Auth.signOut()} title="Sign Out" />
        </View>
      )}
    </View>
  );
}

export default Testfile;
