import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfessionalCard = () => {
  const navigation = useNavigation();

  const offers = [
    {
      name: "Alice",
      lastName: "Soy",
      spécialité: "Cuisine Végane",
      image: require("../assets/joe.jpg"),
      TJM: 300,
    },
    {
      name: "Jacques",
      lastName: "Attali",
      spécialité: "Cuisine Belge",
      image: require("../assets/joe.jpg"),
      TJM: 300,
    },
    {
      name: "Irene",
      lastName: "Marchand",
      spécialité: "Cuisine Diabétique",
      image: require("../assets/joe.jpg"),
      TJM: 300,
    },
    {
      name: "Mina",
      lastName: "Soretti",
      spécialité: "Cuisine WestAf",
      image: require("../assets/joe.jpg"),
      TJM: 300,
    },
  ];
  const handleOnPress = () => {
    navigation.navigate("profildetails");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardStyle}>
      <Image style={styles.images} resizeMode="cover" source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {item.name} {item.lastName}
        </Text>
        <Text style={styles.specialite}>Spécialité: {item.spécialité}</Text>
        <Text style={styles.tjm}>TJM: {item.TJM}€</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonText}>Réserver</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={offers}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ProfessionalCard;

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
    marginVertical: 10,
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
