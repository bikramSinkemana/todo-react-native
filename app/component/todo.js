import React from "react";
import {
  TouchableHighlight,
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  Image
} from "react-native";
import tick from "../images/tick.png";
import blank from "../images/blank.png";
import AlertBox from "./AlertBox";

const Todo = props => (
  <View key={props.todo.id} style={styles.wrapper}>
    <View style={styles.textWrapper}>
      <AlertBox todo={props.todo} />
    </View>
    <TouchableHighlight
      onPress={() => {
        props.toggle(props.todo);
      }}
    >
      <Image
        source={props.todo.isComplete ? tick : blank}
        style={styles.icon}
      />
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    padding: 10,
    borderBottomColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexWrap: "wrap",
    padding: 5,
    margin: 3,

    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  textWrapper: {
    flex: 0.9,
    paddingHorizontal: 5
  },
  text: {
    paddingTop: 8,
    paddingBottom: 8
  },
  icon: {
    width: 40,
    height: 40
  }
});

export default Todo;
