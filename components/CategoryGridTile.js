import {
  Pressable,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";

// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  // const navigation = useNavigation();

  const { width, height } = useWindowDimensions();
  let tileWidth = 0;
  let tileHeight = 0;

  if (width > height) {
    tileWidth = width / 3 - 48;
    tileHeight = width / 3 - 48;
  } else {
    tileWidth = width / 2 - 32;
    tileHeight = width / 2 - 32;
  }

  return (
    <View style={[styles.conatiner, { width: tileWidth, height: tileHeight }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={() => navigation.navigate("MealsOverview")}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,

    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
