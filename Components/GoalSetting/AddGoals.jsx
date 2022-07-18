import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

export default function AddGoals() {
  const [goals, setGoals] = useState(["test"]);
  const [addGoalVisible, setAddGoalVisible] = useState(false);

  function addGoal(inputValue) {
    setGoals((oldGoals) => [...oldGoals, inputValue]);
  }
  function deleteGoal(index) {
    setGoals((oldGoals) =>
      goals.filter((item, itemIndex) => itemIndex !== index)
    );
  }
  function modalVisibility() {
    setAddGoalVisible(!addGoalVisible);
  }
  return (
    <View style={style.appContainer}>
      <View style={style.addGoalStyle}>
        <Button title="Add Goal" onPress={modalVisibility} />
      </View>
      <GoalInput
        visible={addGoalVisible}
        addGoal={addGoal}
        modalVisibility={modalVisibility}
      />
      <View style={style.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return (
              <GoalItem
                data={data.item}
                index={data.index}
                onDelete={deleteGoal}
              />
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  addGoalStyle: {
    margin: 10,
  },
  goalsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});
