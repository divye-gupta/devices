import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image,
} from 'react-native';
function Device() {
  return (
    <ScrollView>
      
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
      <View style={styles.headcontainer1}><Text>Under process</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default Device;
