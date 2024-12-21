import { View, Text, StyleSheet } from "react-native";

const AllPlaces = () => {
  return (
    <View style={styles.container}>
      <Text>All Places</Text>
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
