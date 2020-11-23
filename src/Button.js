import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.text} onPress={this.props.handleClick}>
          {this.props.content}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
  },
});
