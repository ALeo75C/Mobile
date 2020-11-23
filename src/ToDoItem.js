import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = (prop) => {
    console.log("click on " + prop);
  };

  render() {
    return (
      <View style={styles.todo}>
        <Text style={styles.h3}>{this.props.title}</Text>
        <Text style={styles.text}>{this.props.description}</Text>
        <Button
          content="see more"
          handleClick={() => this.handleButtonClick(this.props.title)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todo: {
    marginLeft: 35,
    width: "80%",
    marginTop: 20,
    textAlign: "left",
    paddingTop: 5,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,
    backgroundColor: "#f4f4f4",
  },
  h3: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    marginTop: 10,
    color: "#000",
    fontSize: 15,
  },
  button: {
    fontSize: 18,
  },
});
