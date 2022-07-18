import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function FlexBox() {
  return (
    <View style={style.scaffold}>
      <View style={{ ...style.box, flex: 1 }}>
        <Text>1</Text>
      </View>
      <View style={{ ...style.box, backgroundColor: "green", flex: 2 }}>
        <Text>2</Text>
      </View>
      <View style={{ ...style.box, backgroundColor: "pink", flex: 3 }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  scaffold: {
    padding: 30,
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  box: {
    // height: 100,
    // width: 100,

    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
});
