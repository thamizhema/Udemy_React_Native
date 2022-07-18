import { StyleSheet, Text, Pressable } from "react-native";
import Colors from "../../Components/constants";

export default function MyBtn({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.btn}
      android_ripple={{ color: Colors.white }}
    >
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    backgroundColor: Colors.primary300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  btnText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
});
