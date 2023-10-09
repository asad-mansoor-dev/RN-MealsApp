import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

function MealsOverviewScreen({ route }) {
  // const route = useRoute();
  const categoryID = route.params.categoryID;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem item={itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
