import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";
import { style } from "./style";

type Props = TextInputProps & {
  _placeholder: string;
};

const Input = ({ _placeholder, ...rest }: Props) => {
  return (
    <TextInput
      style={style.inputContainer}
      placeholder={_placeholder}
      placeholderTextColor={colors.gray[500]}
      {...rest}
    />
  );
};

export default Input;
