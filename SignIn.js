import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const SignIn = () => {
  return (
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
        <TextInput style={styles.tbox} placeholderTextColor="#3F72AF" placeholder="Email" />
        <TextInput style={styles.tbox} secureTextEntry={true} placeholderTextColor="#3F72AF" placeholder="Password"/>
      </View>

      <View style={styles.headcontainer2}>
        <Button onPress={signIn} color="#112D4E" title="Login" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>
          Not Registered?<TouchableOpacity onPress={()=>updateFormState(() => ({...formState, formType: 'signUp'}))}><Text style={styles.text}> SignUp</Text></TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  screen:{
    height:Dimensions.get('window').height,
    backgroundColor: '#F9F7F7',
    alignItems:'center'
  },
  text:{
    color:'black',
    margin : 5,
    padding:10,
    alignItems:'baseline',
    fontSize:17,
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
  headcontainer:{
    alignItems:'center',
    fontSize:50
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
});

export default SignIn;
