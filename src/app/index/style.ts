import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  text: {
    fontSize: 20,
    color: colors.green[300],
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  logo: {
    width: 32,
    height: 38,
  },
  containerList: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  contentList: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[900],
  },
  modalTitle: {
    fontSize: 22,
    color: colors.gray[300],
  },
  modalHeader: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.gray[900],
    justifyContent: "space-between",
  },
  modalUrl: {
    backgroundColor: colors.gray[900],
    alignItems: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  containerOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.gray[900],
  },
  ModalTitle: {
    fontSize: 22,
    color: colors.gray[300],
  },
  ModalUrl: {
    fontSize: 12,
    color: colors.gray[300],
  },
});
