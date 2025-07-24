import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  contentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray[300],
  },
  contentUrl: {
    fontSize: 11,
    color: colors.gray[300],
  },
});
