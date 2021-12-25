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
  TouchableOpacity,
  Dimensions
} from 'react-native';
function Device() {
  return (
    <ScrollView style={styles.headcontainer}>
        <View style={styles.logo}><Image
          source={require('./assets/logo.jpg')}
          style={{width: 90, height: 90}}
          /></View>
          <Text style={styles.text}>Warranty</Text>
          <View style={styles.cover}><View style={styles.barWarranty}></View></View>

          <Text style={styles.text}>Device Health</Text>
          <View style={styles.cover}><View style={styles.barHealth}></View></View>

          <View style={styles.headcontainer1}>
            <Text style={styles.text}>Warranty</Text>
            <Text style={styles.text}>XYZ</Text>
          </View>

          <View style={styles.headcontainer1}>
            <Text style={styles.text}>Price</Text>
            <Text style={styles.text}>XYZ</Text>
          </View>

          <View style={styles.headcontainer1}>
            <Text style={styles.text}>Purchase Date</Text>
            <Text style={styles.text}>XYZ</Text>
          </View>

          <View style={styles.headcontainer1}>
            <Text style={styles.text}>Warranty</Text>
            <Text style={styles.text}>XYZ</Text>
          </View>
         
          <View style={styles.buttons1}><TouchableOpacity style={styles.button}><Text>View Documents</Text></TouchableOpacity></View>

          <Text style={styles.text}>Contact Manufacturer</Text>
          <Text style={styles.text}>Contact Vendor</Text>

          <View style={styles.buttons2}><TouchableOpacity style={styles.button}><Text>Remove Product</Text></TouchableOpacity></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headcontainer:{
    backgroundColor:'#F9F7F7',
    height:Dimensions.get('window').height
  },
  headcontainer1:{
    flexDirection:'row',
    margin:5,
    justifyContent:'space-between'
  },
  logo:{
    margin:0,
    alignItems:'center',
    padding:20,
    marginBottom:30
  },
  text:{
    color:'black',
    margin : 5,
    padding:5,
    alignItems:'baseline',
    fontSize:16
  },
  button:{
    margin:15,
    backgroundColor:'#112D4E',
    padding:15,
    borderRadius:30,
  },
  buttons1:{
    alignItems:'center',
    marginBottom:30
  },
  buttons2:{
    alignItems:'center',
    marginTop:40
  },
  cover:{
    borderColor:'#3F72AF',
    borderStyle:'solid',
    margin:10,
    padding:2,
    borderWidth:1,
    borderRadius:10,
  },
  barWarranty:{
    margin:1,
    padding:20,
    backgroundColor:'#3F72AF',
    borderRadius:10,
    width:'20%'
  },
  barHealth:{
    margin:1,
    padding:20,
    backgroundColor:'#3F72AF',
    borderRadius:10,
    width:'30%'
  }
});

export default Device;
