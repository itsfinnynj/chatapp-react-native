import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <View style={{ marginTop: 64 }}>
          <Image
            source={require("../assets/chat.png")}
            style={{ width: 140, height: 140, alignSelf: "center" }}
          />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <View style={{ alignItems: "flex-end", marginTop: 40 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Ionicons name="md-arrow-round-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
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
    width: 540,
    height: 540,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -140,
    top: -20,
  },
  header: {
    fontWeight: "800",
    fontSize: 24,
    color: "#514E5A",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514e5a",
    fontWeight: "600",
  },
  continue: {
    width: 60,
    height: 60,
    borderRadius: 70 / 2,
    backgroundColor: "#2bb2bb",
    alignItems: "center",
    justifyContent: "center",
  },
});
