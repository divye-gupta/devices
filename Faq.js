import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';

function Faq() {
  return (
    <ScrollView style={styles.headcontainer}>
      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Faq Question 1</Text>
        <Text style={styles.text}>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Faq Question 2</Text>
        <Text style={styles.text}>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Faq Question 3</Text>
        <Text style={styles.text}>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text style={styles.text}>Faq Question 4</Text>
        <Text style={styles.text}>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>
    </ScrollView>
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
  headcontainer:{
    backgroundColor:'#F9F7F7',
    height:Dimensions.get('window').height
  },
  headcontainer1:{
    borderColor:'#000',
    borderStyle:'solid',
    borderWidth:0.5,
    margin : 10,
    borderRadius:10
  }
});

export default Faq;
