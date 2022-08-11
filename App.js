import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";

import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Countdowns</Text>
        <View style={styles.items}>
          <Task text={"Squid's First Day!!"} />
          <Task text={"My birthday"} />
        </View>
      </View>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addTaskWrapper}
      >
        <TextInput style={styles.input} placeHolder={"Add a task"} />

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView >
    </View>
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
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f7f7f7',
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
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 90,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    shadowOffset: {}
  },
  addText: {
    fontSize: 25,
    // fontWeight: "bold",
  }
});
