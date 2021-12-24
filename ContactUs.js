import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from 'react-native';

function ContactUs() {
  return (
    <>
      <Image
        style={styles.logo}
        source={require('./assets/logo.jpg')}
        style={{width: 300, height: 100}}
      />

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text>Mail</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text>Github</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text>LinkedIn</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text>Phone Number</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default ContactUs;
