import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type MyCategories = PressableProps & {
  _text: string;
  _icon: keyof typeof MaterialIcons.glyphMap;
  isSelected: boolean;
};

export const Category = (props: MyCategories) => {
  const { _text, _icon, isSelected, ...rest } = props;
  const _colors = isSelected ? colors.green[300] : colors.gray[200];

  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons
        style={[styles.icon, { color: _colors }]}
        size={18}
        name={_icon}
      />
      <Text style={[styles.text, { color: _colors }]}>{_text}</Text>
    </Pressable>
  );
};
