import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

import NavBar from "./src/NavBar";
import ToDoItem from "./src/ToDoItem";
import AddTodo from "./src/AddTodo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          title: "Tusk1",
          description: "dedline 1",
        },
        {
          title: "Tusk2",
          description: "dedline 2",
        },
        {
          title: "Tusk3",
          description: "dedline 3",
        },
        {
          title: "Tusk4",
          description: "dedline 4",
        },
      ],
    };
  }

  addTodo = (name) => {
    let newState = this.state.todoList.push({ title: name, description: "" });
    this.setState({ newState });
  };

  renderList = () => {
    let listItems = [];
    this.state.todoList.forEach((todo, i) => {
      listItems.push(
        <ToDoItem title={todo.title} description={todo.description} key={i} />
      );
    });
    return listItems;
  };
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <NavBar />
        <ScrollView>{this.renderList()}</ScrollView>
        <AddTodo handleButtonClick={this.addTodo} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,

    // alignItems: "center",
    // justifyContent: "flex-start",
  },
});
