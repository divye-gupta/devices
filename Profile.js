import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    Image
  } from 'react-native';

function Profile() {
  return (
    <>
    <SafeAreaView>
      <View style={styles.photo}><Image style={styles.logo} source={require( './assets/logo.jpg' )} style={{ width: 100, height: 100 }} /></View>
      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Name  -</Text>
        <Text style={styles.text1}>Customer Name</Text>{/* Render names with variables from signup form */}
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Email -</Text>
        <Text style={styles.text1}>Customer Email</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Phone -</Text>
        <Text style={styles.text1}>Customer Phone</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Devices -</Text>
        <Text style={styles.text1}>Customer Device categories</Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Total Gadgets -</Text>
        <Text style={styles.text1}>Total no of components</Text>
      </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  headcontainer1:{
    flexDirection:'row',
    justifyContent: 'space-between',
    padding:20,
  },
  text:{
    color:'black',
    margin : 5,
    alignItems:'baseline',
    fontSize:17,
  },
  text1:{
    color:'black',
    margin : 5,
    alignItems:'baseline',
    fontSize:17,
    borderColor:'#3F72AF',
    borderStyle:'solid',
    borderWidth:0.5,
    padding: 5,
    borderRadius:20
  },
  photo:{
    alignItems:'center',
    margin:10
  }
});

export default Profile;
