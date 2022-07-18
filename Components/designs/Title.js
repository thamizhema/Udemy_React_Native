import { Text, StyleSheet } from "react-native";
import Colors from "../constants";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 8,
  },
});
