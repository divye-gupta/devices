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

function SignUp() {
  return (
    <View style={styles.screen}>
     <View style={styles.logo}><Image source={require( './assets/logo.jpg' )} style={{ width: 100, height: 100 }} /></View>
      <View style={styles.headcontainer1}>
        <Text style={styles.texthead}>Sign Up</Text>
      </View>

      <View style={styles.headcontainer}>
        <TextInput style={styles.tbox} placeholderTextColor="#3F72AF"  placeholder="username" />
        <TextInput style={styles.tbox} placeholderTextColor="#3F72AF" placeholder="Email" />
        <TextInput style={styles.tbox} placeholderTextColor="#3F72AF"  placeholder="Phone Number" />
        <TextInput style={styles.tbox} placeholderTextColor="#3F72AF"
          secureTextEntry={true}
          placeholder="Create Password"
        />
      </View>

      <View style={styles.headcontainer2}>
        <Button onPress={signUp} color="#112D4E" title="SignUp" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    height:Dimensions.get('window').height,
    backgroundColor: '#F9F7F7',
    alignItems:'center'
  },
  tbox:{
    padding:10,
    margin : 20,
    backgroundColor:'#DBE2EF',
    borderRadius:20,
    width:300,
    borderColor:'#3F72AF',
    borderStyle:'solid',
    borderWidth:1
  },
  headcontainer1:{
    margin : 10,
  },
  headcontainer2:{
    margin : 10,
    width:200,
    paddingLeft:10
  },
  texthead:{
    color:'black',
    alignItems:'baseline',
    fontSize:17,
    alignItems:'center',
    fontSize:30
  },
  logo:{
    margin:10,
    alignItems:'center'
  }
})

export default SignUp;
