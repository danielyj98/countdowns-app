import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

const Task = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.item}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f7f7f7",
    padding: 10,
    borderRadius: 10,
    marginBottom: 12
  }
});

export default Task;
