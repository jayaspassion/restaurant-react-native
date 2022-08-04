import { StyleSheet, Text, View , FlatList, Image} from "react-native";
import React, {useState, useEffect} from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");


  const [result, setResult] = useState(null);

  const getResult = async (id)=>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }
  useEffect(()=>{
      getResult(id);
  }, [])

  if(!result){
      return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri: item}}/>
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
    image:{
        width:400,
        height:250,
        alignSelf: "center",
        marginVertical: 10,
        borderRadius: 5

    },
    container:{
        flex: 1,
    },
    title:{
        fontWeight:"bold",
        fontSize: 30,
        alignSelf: "stretch",
        textAlign:"center",
        marginVertical:20,
        backgroundColor: "#eeeeee",
        paddingVertical: 10
    }
});
