import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.info}>{result.rating} Stars, {result.review} Reviews</Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        paddingBottom: 2,
        borderBottomColor: "#e0e0e0",
        borderBottomWidth: 1
    },
    image:{
        width:350,
        height: 200,
        borderRadius: 4,
        marginBottom: 5
    },
    name:{
        fontWeight: "bold",
        fontSize: 16
    },
    info:{
        color: "gray",
        fontSize: 12
    }
});
