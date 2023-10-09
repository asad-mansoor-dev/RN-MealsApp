import { View, Text, StyleSheet, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute();
  const categoryID = route.params.categoryID;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryID, navigation]);

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
