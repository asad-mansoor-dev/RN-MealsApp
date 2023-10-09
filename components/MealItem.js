import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetailsScreen from "../screens/MealDetailsScreen";

function MealItem({ item }) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("MealDetailsScreen", {
      mealID: item.id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItems}>{item.duration} m</Text>
            <Text style={styles.detailItems}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItems}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
