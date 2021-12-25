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
  Image,
  Dimensions
} from 'react-native';

function Products() {
  return (
      <ScrollView style={styles.headcontainer}>
        <View style={styles.buttons}>
          <TouchableOpacity ><Text style={styles.button}>Filter</Text></TouchableOpacity>
          <TouchableOpacity ><Text style={styles.button}>Sort By</Text></TouchableOpacity>
        </View>

        <View style={styles.headcontainer2}>
          <Text style={styles.text}>Brand</Text>
          <Text style={styles.text}>Device type + name</Text>
          <Text style={styles.text}>Date of purchase</Text>
          <Text style={styles.text}>Warranty Period</Text>
        </View>

        <View style={styles.headcontainer2}>
          <Text style={styles.text}>Brand</Text>
          <Text style={styles.text}>Device type + name</Text>
          <Text style={styles.text}>Date of purchase</Text>
          <Text style={styles.text}>Warranty Period</Text>
        </View>

        <View style={styles.headcontainer2}>
          <Text style={styles.text}>Brand</Text>
          <Text style={styles.text}>Device type + name</Text>
          <Text style={styles.text}>Date of purchase</Text>
          <Text style={styles.text}>Warranty Period</Text>
        </View>
      </ScrollView>
   
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
    padding:5,
    alignItems:'baseline',
    fontSize:17
  },
  buttons:{
    flexDirection:'row',
    margin:10,
    justifyContent:'center'
  },
  button:{
    margin:15,
    backgroundColor:'#3F72AF',
    padding:15,
    borderRadius:30,
    paddingLeft:30,
    paddingRight:30,
  },
  headcontainer2:{
    backgroundColor:'#DBE2EF',
    borderRadius:20,
    borderColor:'#3F72AF',
    borderStyle:'solid',
    margin:18,
    padding:10,
    borderWidth:1
  }
});

export default Products;
