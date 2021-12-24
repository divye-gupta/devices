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

function Products() {
  return (
    <>
      <ScrollView>
        <View style={styles.headcontainer1}>
          <Image
            style={styles.logo}
            source={require('./assets/logo.jpg')}
            style={{width: 40, height: 40}}
          />
          <Button style={styles.button} title="Filter" />
          <Button style={styles.button} title="Sort By" />
        </View>

        <View style={styles.headcontainer2}>
          <Text>Brand</Text>
          <Text>Device type + name</Text>
          <Text>Date of purchase</Text>
          <Text>Warranty Period</Text>
        </View>

        <View style={styles.headcontainer2}>
          <Text>Brand</Text>
          <Text>Device type + name</Text>
          <Text>Date of purchase</Text>
          <Text>Warranty Period</Text>
        </View>

        <View style={styles.headcontainer2}>
          <Text>Brand</Text>
          <Text>Device type + name</Text>
          <Text>Date of purchase</Text>
          <Text>Warranty Period</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

export default Products;
