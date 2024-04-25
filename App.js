import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfilScreen } from "./screens/ProfilScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DescriptionOffer } from "./screens/DescriptionOffer";
import { DescriptionProfil } from "./screens/DescriptionProfil";

function TabBottom() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabBottom" component={TabBottom} />
        <Stack.Screen name="description" component={DescriptionOffer} />
        <Stack.Screen name="profildetails" component={DescriptionProfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centre le contenu verticalement
    alignItems: "center", // Centre le contenu horizontalement
  },
});
