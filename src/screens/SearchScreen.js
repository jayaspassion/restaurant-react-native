import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something Went wrong");
    }
  };

  useEffect(()=>{
      searchApi("pasta");
  },[])

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
