import { View, Text, StyleSheet, FlatList } from "react-native";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.placeItem}>
          <Text style={styles.placeName}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: "#888",
  },
  placeItem: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  placeName: {
    fontSize: 18,
    color: "#333",
  },
});

export default PlacesList;
