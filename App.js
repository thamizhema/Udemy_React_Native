import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import AddGoals from "./Components/GoalSetting/AddGoals";
import FlexBox from "./Components/GoalSetting/FlexBox";
import StartGameScreen from "./Screens/GameScreens/StartGameScreen";

import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./Screens/GameScreens/GameScreen";
import Colors from "./Components/constants";
import GameOverScreen from "./Screens/GameScreens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  return (
    <LinearGradient
      colors={[Colors.accent500, Colors.primary800]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/bg_dice.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
