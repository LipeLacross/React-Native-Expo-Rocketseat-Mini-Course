import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.green[300],
    borderRadius: 10,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontWeight: "bold",
    color: colors.gray[100],
  },
});
