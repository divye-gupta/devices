import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Home from './Home';
import Profile from './Profile';
import Notifications from './Notifications';
import Form from './Form';


const Stack = createNativeStackNavigator();

function Homecompo() {
  const navigation = useNavigation();
  return (
    <>
      <Home />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.home} />
        <Text>Home</Text>
      </TouchableOpacity>
    </>
  );
}

function Noticompo() {
  const navigation = useNavigation();

  return (
    <>
      <Notifications />
      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.plusCircle} />
        <Text>Add</Text>
      </TouchableOpacity>
    </>
  );
}

function Formcompo() {
  const navigation = useNavigation();

  return (
    <>
      <Form />
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.bell} />
        <Text>Notifications</Text>
      </TouchableOpacity>
    </>
  );
}

function Profilecompo() {
  const navigation = useNavigation();

  return (
    <>
      <Profile />
      <TouchableOpacity onPress={() => console.log('Profile')}>
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.user} />
        <Text>Profile</Text>
      </TouchableOpacity>
    </>
  );
}

function Navbar() {
  // const navigation = useNavigation();
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Homecompo} />
          <Stack.Screen name="Notifications" component={Noticompo} />
          <Stack.Screen name="Form" component={Formcompo} />
          <Stack.Screen name="Profile" component={Profilecompo} />
        </Stack.Navigator>
        
        
      </NavigationContainer>
      {/* <>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FontAwesome style={styles.iconStyle} icon={SolidIcons.home} />
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Form')}>
            <FontAwesome
              style={styles.iconStyle}
              icon={SolidIcons.plusCircle}
            />
            <Text>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <FontAwesome style={styles.iconStyle} icon={SolidIcons.bell} />
            <Text>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Profile')}>
            <FontAwesome style={styles.iconStyle} icon={SolidIcons.user} />
            <Text>Profile</Text>
          </TouchableOpacity>
        </> */}
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'white',
  },
});

export default Navbar;
