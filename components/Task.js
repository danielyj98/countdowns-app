import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    marginBottom: 12
  }
})

export default Task;
