import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function SingleTodo({ todo }) {

  


  return (
    <View style={styles.todo}>
      <Text style={styles.todotext}>{todo.text}</Text>

      <TouchableOpacity>
        <MaterialIcons
          style={styles.todoaction}
          name="edit"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialIcons
          style={styles.todoaction}
          name="delete"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: "black",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  todotext: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  todoaction: {
    marginLeft: 15,
  },
});
