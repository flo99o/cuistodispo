import React from "react";
import { View, Text, StyleSheet,Button, Touchable, TouchableOpacity } from "react-native";

export const DescriptionOffer = () => {
  const offerDetails = {
    companyName: "TechCorp Inc.",
    jobTitle: "Développeur Full Stack",
    salary: "60,000 - 80,000 EUR / an",
    description: "TechCorp Inc. recherche un développeur Full Stack expérimenté pour rejoindre notre équipe. Vous travaillerez sur des projets innovants et collaborerez avec une équipe dynamique.",
    responsibilities: [
      "Concevoir et développer des applications web",
      "Collaborer avec l'équipe de conception",
      "Participer aux réunions de planification de projet",
      "Résoudre les problèmes techniques",
    ],
    skills: [
      "JavaScript, React, Node.js",
      "Expérience avec des bases de données relationnelles",
      "Capacité à travailler en équipe",
      "Excellentes compétences en communication",
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.jobTitle}>{offerDetails.jobTitle}</Text>
      <Text style={styles.companyName}>{offerDetails.companyName}</Text>
      <Text style={styles.salary}>Salaire: {offerDetails.salary}</Text>
      <Text style={styles.sectionTitle}>Description du Poste:</Text>
      <Text>{offerDetails.description}</Text>
      <Text style={styles.sectionTitle}>Responsabilités:</Text>
      {offerDetails.responsibilities.map((responsibility, index) => (
        <Text key={index} style={styles.listItem}>- {responsibility}</Text>
      ))}
      <Text style={styles.sectionTitle}>Compétences Requises:</Text>
      {offerDetails.skills.map((skill, index) => (
        <Text key={index} style={styles.listItem}>- {skill}</Text>
      ))}
       <TouchableOpacity  style={styles.button}>
        <Text style={styles.buttonText}>Postuler</Text>
       </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop:85
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  companyName: {
    fontSize: 18,
    color: "#666",
  },
  salary: {
    fontSize: 16,
    color: "#888",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
  listItem: {
    marginLeft: 16,
  },
  button: {
    backgroundColor: "#007bff",
    width:80,
    height:30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});
