import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ApplyForm = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.textStyle}>Apply Now 2</Text>
      <View style={styles.horizontalLine} />
      {/* Additional form elements can go here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:'black'
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
  },
});

export default ApplyForm;
