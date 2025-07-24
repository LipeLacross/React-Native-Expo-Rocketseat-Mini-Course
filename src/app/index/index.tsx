import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/options";
import { LinkStorage, Storage } from "@/storage/links_storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { style } from "./style";

export default function Index() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>();
  const [selectedLink, setSelectedLink] = useState<LinkStorage>();

  useFocusEffect(
    // useFocusEffect é usado para executar uma função quando a tela é focada
    // Isso é útil para atualizar os links sempre que a tela for exibida
    useCallback(() => {
      //useCallback é usado para memorizar a função e evitar recriações desnecessárias
      (async () => {
        const result = await Storage.get();
        const filteredLinks = result.filter(
          (link) => link.category === category
        );
        setLinks(filteredLinks);
      })();
    }, [category, links])
  );

  // Função para lidar com a exibição dos detalhes do link selecionado
  const handleShowDetails = (selected: LinkStorage): void => {
    setSelectedLink(selected);
    setIsVisible(true);
  };

  const deleteLink = async (id: string): Promise<void> => {
    try {
      Alert.alert("Deletar", "Deseja deletar esse link ?", [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => {
            Storage.deleted(id);
            setIsVisible(false);
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível deletar o link.");
      console.error("Erro ao deletar o link:", error);
    }
  };

  const linkOpen = async () => {
    try {
      Linking.openURL(selectedLink?.url || "");
      setIsVisible(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
      console.error("Erro ao abrir o link:", error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image style={style.logo} source={require("@/assets/image/logo.png")} />
        <TouchableOpacity onPress={() => router.push("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            _name={item.name}
            url={item.url}
            item={item}
            onDetails={(item) => handleShowDetails(item)}
          />
        )}
        style={style.containerList}
        contentContainerStyle={style.contentList}
        showsVerticalScrollIndicator={true}
      />

      <Modal transparent visible={isVisible} animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>Curso</Text>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <MaterialIcons
                  name="close"
                  size={16}
                  color={colors.gray[300]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.modalUrl}>
            <Text style={style.ModalTitle} numberOfLines={1}>
              {selectedLink?.name}
            </Text>
            <Text style={style.ModalUrl} numberOfLines={1}>
              {selectedLink?.url}
            </Text>
          </View>

          <View style={style.containerOption}>
            <View style={style.header}>
              <Option
                icon="delete"
                name="Deletar"
                variant="primary"
                onPress={() => selectedLink && deleteLink(selectedLink.id)}
              />
              <Option
                icon="language"
                name="Abrir"
                variant="secondary"
                onPress={linkOpen}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
