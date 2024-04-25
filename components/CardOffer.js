import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CardOffer = () => {
  const navigation = useNavigation();

  const offers = [
    {
      jobTilte: "Cuisinier ",
      description: "Cuisine Végane",
      image: require("../assets/joe.jpg"),
      salary: 300,
    },
    {
      jobTilte: "Plongeur",
      description: "faire la vaiselle",
      image: require("../assets/joe.jpg"),
      salary: 300,
    },
    {
      jobTilte: "Chef de rang",
      description: "range les assiettes ",
      image: require("../assets/joe.jpg"),
      salary: 300,
    },
    {
      jobTilte: "Sommelier",
      description: "verse du vin",
      image: require("../assets/joe.jpg"),
      salary: 300,
    },
  ];

  const handleOnPress = () => {
    navigation.navigate("description");
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardStyle} >
      <Image style={styles.images} resizeMode="cover" source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.jobTilte}</Text>
        <Text style={styles.specialite}>Spécialité: {item.description}</Text>
        <Text style={styles.tjm}>Salaire: {item.salary}€</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonText}>Postuler</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={offers}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 190,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    margin: 18,
    padding: 10,
   
  },
  images: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 40,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  specialite: {
    fontSize: 14,
  },
  tjm: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
