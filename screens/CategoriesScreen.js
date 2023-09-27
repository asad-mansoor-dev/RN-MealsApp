import { SafeAreaView, FlatList, useWindowDimensions } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverview");
    }
    return (
      <CategoryGridTile
        title={itemData.title}
        color={itemData.color}
        onPress={onPressHandler}
      />
    );
  }
  const { width, height } = useWindowDimensions();
  let numOfColumns = 2;
  if (width > height) {
    numOfColumns = 3;
  }
  return (
    // <SafeAreaView>
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={numOfColumns}
    />
    // </SafeAreaView>
  );
}

export default CategoriesScreen;
