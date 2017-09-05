import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Image
} from "react-native";
import { connect } from "react-redux";
import { todoCount, fetchTodoAction, toggleTodoAction } from "../actions/todo";
import * as httpUtil from "../httpUtil";
import Todo from "../component/todo.js";
import Form from "../component/Form.js";
import todoBackground from "../images/todoBackground.jpg";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isComplete: false
    };
  }

  addtodoCounter(title, description) {
    let data = {
      title: title,
      description: description,
      isComplete: false
    };
    httpUtil
      .post("https://todo-simple-api.herokuapp.com/todos", data)
      .then(response => {
        this.setState({
          title: "",
          description: ""
        });

        let data = response.data.data;
        this.props.increaseTodoCount(data);
      });
  }

  changeIsComplete(todo) {
    if (todo.isComplete) {
      todo.isComplete = false;
    } else {
      todo.isComplete = true;
    }
    httpUtil
      .put("https://todo-simple-api.herokuapp.com/todos", todo, todo.id)
      .then(response => {
        let data = response.data.data;
        this.props.toggleTodo(data);
      });
  }

  componentDidMount() {
    httpUtil
      .get("https://todo-simple-api.herokuapp.com/todos?page=1&page_size=100")
      .then(response => {
        let data = response.data.data;
        this.props.fetchTodo(data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Image source={todoBackground} style={styles.container}>
        <Form
          addtodoCounter={(title, description) => {
            this.addtodoCounter(title, description);
          }}
        />
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            {this.props.todoCount1[0] ? (
              this.props.todoCount1.map((todo, i) => (
                <Todo
                  key={i}
                  todo={todo}
                  toggle={() => {
                    this.changeIsComplete(todo);
                  }}
                />
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </ScrollView>
        </View>
      </Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  scrollViewWrapper: {
    flex: 0.9,
    paddingTop: 100
  },
  scrollView: {
    flex: 0.9,
    marginBottom: 70
  },
  wrapper: {
    backgroundColor: "#999900",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexWrap: "wrap",
    padding: 5,
    margin: 3
  },
  wrapper2: {
    backgroundColor: "#e5e500",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexWrap: "wrap",
    padding: 5,
    margin: 3
  },
  textWrapper: {
    flex: 0,
    paddingHorizontal: 5
  },
  text: {
    paddingTop: 8
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#0072BB",
    margin: 10
  },
  img: {
    width: "100%"
  }
});

function mapStateToProps(state) {
  return {
    todoCount1: state.todo || []
  };
}

export default connect(mapStateToProps, dispatch => ({
  toggleTodo(data) {
    dispatch(toggleTodoAction(data));
  },
  increaseTodoCount(todos) {
    dispatch(todoCount(todos));
  },
  fetchTodo(todos) {
    dispatch(fetchTodoAction(todos));
  }
}))(AppContainer);
