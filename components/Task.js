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
import Countdown from "react-countdown";
import dateConverter from "./dateConverter";
let smale  = '01 Jan 2070 00:00:00 GMT'
const Task = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  let clock = `${props.day} ${props.month} ${props.year} 00:00:00 GMT`
  return (
    <View style={styles.item}>
      <Text>{props.text}</Text>
      
        <Countdown date={Date.parse(clock)}/>
        
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
