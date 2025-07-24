import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray[600],
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.gray[900],
    color: colors.gray[300],
    fontSize: 18,
  },
});
