import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
const goalImg = require("../../assets/images/g.png");
export default function GoalInput(props) {
  const [inputValue, setInputValue] = useState("");
  function inputHandler(changedText) {
    // console.log(e.nativeEvent.text);
    setInputValue(changedText);
  }
  function addGoalHandler() {
    props.addGoal(inputValue);
    setInputValue("");
    props.modalVisibility();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={style.inputContainer}>
        <Image style={style.image} source={goalImg} />
        <TextInput
          style={style.textInput}
          placeholder="Add your goal"
          value={inputValue}
          onChangeText={inputHandler}
        />
        <View style={style.btnContainer}>
          <View style={style.btn}>
            <Button
              title="Cancel"
              onPress={props.modalVisibility}
              color="red"
            />
          </View>
          <View style={style.btn}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
  textInput: {
    width: "100%",
    fontSize: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#c8e5f7",
    // backgroundColor: "#fffcfd",
    // flex: 0.7,
    width: "75%",
    borderRadius: 7,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "30%",
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
