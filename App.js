import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";
import SingleTodo from "./components/SingleTodo";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo) return;

    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter a Todo"
          style={styles.input}
        />
        <TouchableOpacity onPress={addTodo}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", marginTop: 10 }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <SingleTodo todo={item} todos={todos} setTodo={setTodos} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e3ded1",
  },
  heading: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    shadowColor: "black",
    backgroundColor: "white",
    elevation: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
  },
});
