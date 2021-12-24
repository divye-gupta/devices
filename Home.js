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
    Dimensions
  } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';
import Navbar from './Navbar';
import Profile from './Profile';
//  Render a component with props using another file. LinkedIn Example

function Home({history}) {
  return (
    <View style={styles.screen}>
      <View style={styles.adspace1}><Text style={{color: 'black'}}>This is a adspace</Text></View>
      <View style={styles.headcontainer1}>
          <Text style={{color: 'black', fontSize:25}}>Product Type 1</Text>
          <Text style={{color: 'black',fontSize:18}}>1</Text>  
          <Text style={{color: 'black',fontSize:18}}>2</Text>
          <Text style={{color: 'black',fontSize:18}}>3</Text>
      </View>

      <View style={styles.headcontainer1}>
          <Text style={{color: 'black',fontSize:25}}>Product Type 3</Text>
          <Text style={{color: 'black',fontSize:18}}>1</Text>  
          <Text style={{color: 'black',fontSize:18}}>2</Text>
          <Text style={{color: 'black',fontSize:18}}>3</Text>
      </View>

      <View style={styles.headcontainer1}>
          <Text style={{color: 'black',fontSize:25}}>Product Type 4</Text>
          <Text style={{color: 'black',fontSize:18,borderColor:'black'}}>1</Text>  
          <Text style={{color: 'black',fontSize:18}}>2</Text>
          <Text style={{color: 'black',fontSize:18}}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headcontainer1:{
    borderRadius:10,
    padding:20,
    margin:5,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:1
  },
  screen:{
    padding:10,
  },
  adspace1:{
    padding:70,
  }
});

export default Home;
