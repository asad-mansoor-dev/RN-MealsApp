import { View, Text, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route }) {
  // const route = useRoute();
  const categoryID = route.params.categoryID;

  return (
    <View>
      <Text>Welcome on Meals Screen {categoryID}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
