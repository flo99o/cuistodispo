import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

export const OfferSearch = () => {
  const [searchText, OnSearchText] = useState("");
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        OnSearchText={OnSearchText}
        value={searchText}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer:{
    marginTop: 80
  },

  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});
