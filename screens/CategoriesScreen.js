import { SafeAreaView, FlatList, useWindowDimensions } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return <CategoryGridTile title={itemData.title} color={itemData.color} />;
}
function CategoriesScreen() {
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
