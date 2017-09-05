import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image
} from "react-native";
import todoBackground from "../images/todoBackground.jpg";

class Form extends Component {
  state = {
    modalVisible: false,
    title: "",
    description: ""
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.container}>
            <Image style={styles.img} source={todoBackground} />
            <View style={styles.wrapper}>
              <TextInput
                style={styles.inputText}
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                placeholder="Add note"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputText}
                onChangeText={description => this.setState({ description })}
                value={this.state.description}
                placeholder="Add Description"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
              />

              <Button
                onPress={() => {
                  if (this.state.title && this.state.description) {
                    this.props.addtodoCounter(
                      this.state.title,
                      this.state.description
                    );
                    this.setState({ title: "", description: "" });
                    this.setModalVisible(!this.state.modalVisible);
                  } else {
                    alert("Please Add Both Title and Description");
                  }
                }}
                title="ADD TODO"
              />
            </View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.buttonFront}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textInCompleted}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: "#0072BB",
    margin: 10,
    width: 200,
    textDecorationLine: "underline"
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
  },
  textCompleted: {
    paddingTop: 8,
    paddingBottom: 8,
    textDecorationLine: "line-through",
    color: "#000000"
  },
  textInCompleted: {
    paddingTop: 8,
    paddingBottom: 8,
    color: "#000000",
    fontSize: 30
  },
  img: {
    width: "100%"
  },
  wrapper: {
    flex: 1,
    position: "absolute",
    top: 150,
    left: 50
  },
  header: {
    fontSize: 30,
    marginBottom: 10
  },
  buttonFront: {
    position: "absolute",
    left: 250,
    top: 500,
    backgroundColor: "blue",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#d91e63",
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "blue",
    padding: 10,

    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 3
  },
  buttonHighlight: {},
  buttonText: {
    color: "#ffffff"
  }
});
export default Form;
