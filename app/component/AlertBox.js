import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image
} from "react-native";
import todoBackground from "../images/todoBackground.jpg";

class AlertBox extends Component {
  state = {
    modalVisible: false
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
              <Text style={styles.header}>To do </Text>
              <Text>Title: {this.props.todo.title} </Text>
              <Text>Description : {this.props.todo.description}</Text>
              <Text>
                Completed:{" "}
                {this.props.todo.isComplete ? "Completed" : "Still remaining"}
              </Text>
            </View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.buttonHighlight}
          onPress={() => {
            this.setModalVisible(true);
          }}
          onLongPress={() => {
            alert("long pressed");
          }}
        >
          <Text
            style={
              this.props.todo.isComplete ? (
                styles.textCompleted
              ) : (
                styles.textInCompleted
              )
            }
          >
            {this.props.todo.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    color: "#000000"
  },
  img: {
    left: 0,
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
export default AlertBox;
