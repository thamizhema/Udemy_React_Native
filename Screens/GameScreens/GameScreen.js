import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import NumberContainer from "../../Components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";

import Title from "../../Components/designs/Title";
import MyBtn from "./MyBtn";
import Colors from "../../Components/constants";

function genarateRandomBetween(min, max, exclude) {
  const randNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randNumber === exclude) {
    genarateRandomBetween(min, max, exclude);
  } else {
    return randNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  const initialNumber = genarateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRanNumber = genarateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRanNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponet's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={{ color: Colors.white, fontSize: 20 }}>
          Higher or Lower?
        </Text>
        <View style={styles.buttonTab}>
          <MyBtn
            onPress={() => {
              nextGuessHandler("lower");
            }}
          >
            <Ionicons name="md-remove" size={30} color="white" />
          </MyBtn>
          <MyBtn onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={30} color="white" />
          </MyBtn>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  buttonTab: {},
});
export default GameScreen;
