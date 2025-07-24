import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export const Option = ({
  name: text,
  icon,
  variant = "primary",
  ...rest
}: Props) => {
  const color = variant === "primary" ? colors.gray[400] : colors.green[300];

  return (
    <TouchableOpacity style={style.containerOption} {...rest}>
      <MaterialIcons name={icon} size={20} color={color} />
      <Text style={[style.textOption, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};
