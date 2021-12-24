import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';



function Form() {
  return (
    <>
      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Product Type</Text>
        <TextInput style={styles.tbox} placeholder="Product Type" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Nickname</Text>
        <TextInput style={styles.tbox} placeholder="Nickname" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Brand</Text>
        <TextInput style={styles.tbox} placeholder="Brand" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Price</Text>
        <TextInput style={styles.tbox} placeholder="Price" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Purchase Date</Text>
        <TextInput style={styles.tbox} placeholder="Purchase Date" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Warranty Duration</Text>
        <TextInput style={styles.tbox} placeholder="Warranty Duration" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>
          AMC<Text style={styles.text}>(If Yes, then Duration)</Text>
        </Text>
        <TextInput style={styles.tbox} placeholder="AMC" />
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>
          Documents
        </Text>
        <View style={styles.click1}>
        <Button color="#112D4E"  title="Upload" />
        </View>
      </View>
      <View style={styles.click2}>
      <Button color="#112D4E"  title="Done" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'black',
    margin : 5,
    padding:10,
    alignItems:'baseline',
    fontSize:17
  },
  tbox:{
    padding:5,
    margin : 10,
    backgroundColor:'#DBE2EF',
    borderRadius:20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor:'#3F72AF',
    borderStyle:'solid',
    borderWidth:1
  },
  headcontainer1:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  click1:{
    borderColor:'#F9F7F7',
    borderStyle:'solid',
    borderWidth:0.5,
    margin : 10

  },
  click2:{
    borderColor:'#F9F7F7',
    borderStyle:'solid',
    borderWidth:0.5,
    margin : 10,
    width:100,
    marginLeft:150,
    marginTop:60,
  }
});

export default Form;
