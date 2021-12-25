import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions
} from 'react-native';

function ContactUs() {
  return (
    <View style={styles.headcontainer}>
      
      <View style={styles.logo}><Image
        style={styles.logo}
        source={require('./assets/logo.jpg')}
        style={{width: 100, height: 100}}
      /></View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text style={styles.text}>Mail</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text style={styles.text}>Github</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text style={styles.text}>LinkedIn</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.jpg')}
          style={{width: 40, height: 40}}
        />
        <Text style={styles.text}>Phone Number</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headcontainer:{
    backgroundColor:'#F9F7F7',
    height:Dimensions.get('window').height
  },
  text:{
    color:'black',
    margin : 5,
    padding:10,
    alignItems:'baseline',
    fontSize:17
  },
  headcontainer1:{
    flexDirection:'row',
    margin:20,
    marginLeft:40,
    justifyContent:'space-between',
  },
  logo:{
    margin:10,
    alignItems:'center',
    padding:10,
    marginBottom:30
  }
});

export default ContactUs;
