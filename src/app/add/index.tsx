import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import Input from "@/components/Input";
import { Storage } from "@/storage/links_storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { indexStyles } from "./index.styles";

type valueUrl = {
  id: string;
  name: string;
  url: string;
};

const Add = () => {
  const router = useRouter();
  const [category, setCategory] = useState(categories[0].name);
  const [InputValue, setInputValue] = useState<valueUrl>({
    id: new Date().getTime().toString(),
    name: "",
    url: "",
  });

  const handleInput = (key: keyof valueUrl, value: string) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
  };
  const handleSaveData = async () => {
    try {
      if (!category) {
        throw new Error("Informe a categoria");
      }

      if (!InputValue.name.trim()) {
        throw new Error("Informe o nome");
      }

      if (!InputValue.url.trim()) {
        throw new Error("Informe a url");
      }

      const newLink = {
        ...InputValue,
        category: category,
      };

      await Storage.save(newLink);

      Alert.alert("Sucesso", "Link adicionado com sucesso!", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } catch (error: any) {
      Alert.alert("erro", error.message);
    }
  };

  return (
    <View style={indexStyles.addContainer}>
      <View style={indexStyles.addHeader}>
        <View style={indexStyles.addBackAndTitle}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons
              name="arrow-back"
              size={32}
              color={colors.gray[300]}
            />
          </TouchableOpacity>
          <Text style={indexStyles.addLabel}>Selecione uma categoria</Text>
        </View>

        <Text style={indexStyles.addTitle}>Novo</Text>
      </View>

      <Categories selected={category} onChange={setCategory} />

      <View style={indexStyles.form}>
        <Input
          _placeholder="Nome"
          onChangeText={(value) => handleInput("name", value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          _placeholder="URL"
          onChangeText={(value) => handleInput("url", value)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Adicionar" onPress={handleSaveData} />
      </View>
    </View>
  );
};

export default Add;
