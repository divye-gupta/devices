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

function Faq() {
  return (
    <ScrollView>
      <View style={styles.headcontainer1}>
        <Text>Faq Question 1</Text>
        <Text>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text>Faq Question 2</Text>
        <Text>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text>Faq Question 3</Text>
        <Text>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>

      <View style={styles.headcontainer1}>
        <Text>Faq Question 4</Text>
        <Text>
          Faq Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq AnswerFaq
          Answer Faq Answer Faq AnswerFaq Answer Faq Answer Faq Answer
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default Faq;
