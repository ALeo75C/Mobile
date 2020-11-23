import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.numbar}>
        <Text style={styles.text}>NumBar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numbar: {
    width: "100%",
    paddingLeft: 30,
    paddingTop: 30,
    paddingBottom: 15,
    backgroundColor: "#ffdfba",
  },
  text: {
    color: "#332c25",
    fontWeight: "bold",
    fontSize: 20,
  },
});
