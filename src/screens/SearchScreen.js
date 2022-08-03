import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.textStyle}>{errorMessage}</Text>
      ) : null}
      <Text style={styles.textStyle}>We have found {results.length}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
  },
});

export default SearchScreen;
