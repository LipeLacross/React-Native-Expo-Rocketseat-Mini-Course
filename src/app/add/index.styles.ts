import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  addContainer: {
    flex: 1,
    paddingTop: 62,
  },
  addHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  addTitle: {
    color: colors.gray[300],
    fontSize: 22,
  },
  addLabel: {
    textAlign: "left",
    marginTop: 15,
    color: colors.gray[600],
    fontSize: 15,
  },
  addBackAndTitle: {
    justifyContent: "flex-start",
  },
  form: {
    flexDirection: "column",
    gap: 16,
    marginTop: 15,
    paddingHorizontal: 14,
  },
});
