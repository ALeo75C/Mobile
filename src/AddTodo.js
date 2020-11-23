import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Button from "./Button";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoName: "",
    };
  }

  changeState = (text) => {
    this.setState({ newTodoName: text });
  };

  handleButtonClick = () => {
    this.props.handleButtonClick(this.state.newTodoName);
  };

  render() {
    return (
      <View style={styles.add}>
        <TextInput
          style={styles.input}
          onChangeText={this.changeState}
          placeholder="toDo name"
        />
        <Button
          content="Add"
          handleClick={this.handleButtonClick}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    // flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
    flexDirection: "row",
    height: "auto",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 35,
    paddingTop: 35,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
  },
  input: {
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    fontSize: 15,
    height: 30,
    width: "65%",
  },
  button: {
    width: "30%",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,
    backgroundColor: "#f6bd7a",
  },
});
