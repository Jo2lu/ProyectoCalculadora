import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#464F38",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    width: 65,
    height: 65
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#000",
    fontSize: 24,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#FFFF00",
  },
  buttonAccent: {
    backgroundColor: "#FFFF00",
  },
});