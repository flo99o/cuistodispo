import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export const DescriptionProfil = () => {
  const profile = {
    name: "John Doe",
    position: "Chef de cuisine",
    description: "Chef cuisinier avec 10 ans d'expérience dans la cuisine française. Spécialisé dans les plats gastronomiques et la cuisine moléculaire.",
    skills: ["Cuisine française", "Gestion d'équipe", "Créativité", "Organisation"],
    experience: [
      {
        role: "Sous-chef",
        company: "Le Gourmet",
        duration: "2012-2016",
      },
      {
        role: "Chef cuisinier",
        company: "La Belle Époque",
        duration: "2016-2021",
      },
    ],
    image: require("../assets/joe.jpg"),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={profile.image} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.position}>{profile.position}</Text>
      <Text style={styles.description}>{profile.description}</Text>

      <Text style={styles.sectionHeader}>Compétences :</Text>
      {profile.skills.map((skill, index) => (
        <Text key={index} style={styles.skill}>
          - {skill}
        </Text>
      ))}

      <Text style={styles.sectionHeader}>Expérience :</Text>
      {profile.experience.map((exp, index) => (
        <Text key={index} style={styles.experience}>
          {exp.role} chez {exp.company} ({exp.duration})
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  position: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  skill: {
    fontSize: 14,
    color: "#444",
  },
  experience: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
  },
});
