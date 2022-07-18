//import liraries
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants";

// create a component
function PrimaryButton({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress ? onPress : () => {}}
      android_ripple={{ color: Colors.primary600 }}
      style={({ pressed }) =>
        pressed
          ? [styles.buttonOuterContainer, styles.buttonPressed]
          : styles.buttonOuterContainer
      }
      // style={({ pressed }) => pressed && styles.buttonPressed} //for ios
    >
      <View style={styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

// define your styles
const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 28,
    backgroundColor: Colors.primary500,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    // backgroundColor: "#9b1357",

    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

//make this component available to the app
export default PrimaryButton;
