import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifiyContent: "center",
    alignItems: "center",
  },
});
