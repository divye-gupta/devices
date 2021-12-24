import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

function Notifications() {
  return (
    <ScrollView>
      <View style={styles.headcontainer1}>
        <View style={styles.noti}><Text style={styles.text}>Notification 1</Text></View>
        <View style={styles.noti}><Text style={styles.text}>Notification 1</Text></View>
        <View style={styles.noti}><Text style={styles.text}>Notification 1</Text></View>
        <View style={styles.noti}><Text style={styles.text}>Notification 1</Text></View>
        <View style={styles.noti}><Text style={styles.text}>Notification 1</Text></View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headcontainer1:{
    justifyContent: 'space-between',
    padding:10
  },
  text:{
    color:'black',
    margin : 5,
    padding:10,
    alignItems:'baseline',
    fontSize:17
  },
  noti:{
    borderColor:'#3F72AF',
    borderStyle:'solid',
    borderWidth:1,
    margin:10,
    borderRadius:10,
    padding:5,
    alignItems:'center'
  }
});

export default Notifications;
