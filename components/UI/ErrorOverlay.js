import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error Occured!</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
      <Button onPress={onConfirm} style={styles.button}>
        Okay
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.error50,
  },
  text: {
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
  },
  button: {
    marginTop: 10,
  },
});
