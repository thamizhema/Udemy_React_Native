import { StyleSheet } from "react-native";
import Colors from "../../Components/constants";
const startGameScreen = StyleSheet.create({
  inputContainer: {
    flex: 0,
    marginHorizontal: 25,
    borderRadius: 10,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { height: 5, width: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    textAlign: "center",
    marginBottom: 25,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export { startGameScreen };
