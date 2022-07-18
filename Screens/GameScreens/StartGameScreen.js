import { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Alert } from "react-native";
import PrimaryButton from "../../Components/designs/PrimaryButton";
import { startGameScreen as styles } from "./gameScrennStyles";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function onChangeHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmButton() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input",
        "Number has to be a Number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInput,
          },
        ]
      );
      return;
    }

    Keyboard.dismiss();
    // console.log(onPickNumber);
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={onChangeHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmButton}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;
