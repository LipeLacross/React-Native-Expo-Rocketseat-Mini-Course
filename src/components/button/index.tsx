import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
};

export const Button = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={style.btnContainer} activeOpacity={0.7} {...rest}>
      <Text style={style.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
