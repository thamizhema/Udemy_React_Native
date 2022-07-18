import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  function pressableStyle(pressData) {
    console.log(pressData);
    return pressData.pressed;
  }

  return (
    <View style={style.goalitem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={() => {
          props.onDelete(props.index);
        }}
        style={({ pressed }) => pressed && style.pressedStyle}
      >
        <Text style={style.itemText}>{props.data}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  goalitem: {
    backgroundColor: "#f55678",
    paddingLeft: 20,
    borderRadius: 6,
    margin: 5,
  },
  pressedStyle: {
    opacity: 0.5,
  },
  itemText: { color: "#ffffff", fontSize: 18, padding: 15 },
});
