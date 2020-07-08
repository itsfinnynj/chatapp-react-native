import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default class LoginScreen extends React.Component {
  state = {
    name: "",
  };

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4f5f7",
  },
  circle: {
    width: 500,
    heught: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
  },
});
