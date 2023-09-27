import { SafeAreaView, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return <CategoryGridTile title={itemData.title} color={itemData.color} />;
}
function CategoriesScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCategoryItem(item)}
        numColumns={1}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;
