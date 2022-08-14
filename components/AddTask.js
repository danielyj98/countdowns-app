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
    <>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.item}>
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Text>This is my modal!</Text>
          <Button
            title="Close"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </SafeAreaView>
      </Modal>
    </>
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
