import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something Went wrong");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMessage];
};
