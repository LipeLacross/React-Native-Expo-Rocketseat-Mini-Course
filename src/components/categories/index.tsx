import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { style } from "./styles";

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export const Categories = ({ selected, onChange }: Props) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          _icon={item.icon}
          _text={item.name}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={style.container}
      contentContainerStyle={style.content}
      showsHorizontalScrollIndicator={false}
    />
  );
};
