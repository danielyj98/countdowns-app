import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Modal,
  Button,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Task from "./Task";

export default function Home(props) {
  const [taskName, setTaskName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    let task = { taskName, month, day, year };
    setTaskArr([...taskArr, task]);
    console.log("Task", task);
    setTaskName('');
    setMonth('');
    setDay('');
    setYear('');
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My Countdowns</Text>
          <View style={styles.items}>
            {taskArr.map((task, index) => {
              return <Task key={index} text={task.taskName} />;
            })}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="slide">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // style={styles.addTaskWrapper}
          >
            <Text>Task Name</Text>
            <TextInput
              style={styles.input}
              value={taskName}
              onChangeText={(text) => {
                setTaskName(text);
              }}
            />

            <Text>Month</Text>
            <TextInput
              style={styles.input}
              value={month}
              onChangeText={(num) => setMonth(num)}
            />

            <Text>Day</Text>
            <TextInput
              style={styles.input}
              value={day}
              onChangeText={(num) => setDay(num)}
            />

            <Text>Year</Text>
            <TextInput
              style={styles.input}
              value={year}
              onChangeText={(num) => setYear(num)}
            />
            <Button
              title="Submit"
              onPress={() => {
                handleSubmit();
              }}
            />
            <Button
              title="Close"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </KeyboardAvoidingView>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold"
  },
  items: {
    marginTop: 25
  },
  addTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f7f7f7",
    borderRadius: 30,
    width: 250,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    shadowOffset: {}
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 90,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    shadowOffset: {}
  },
  addText: {
    fontSize: 25,
    color: "#007AFE"
  }
});
