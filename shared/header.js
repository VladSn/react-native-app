import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  const openMenyHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <ImageBackground
        source={require("../assets/game_bg.png")}
        style={styles.backGroudnImg}
      ></ImageBackground>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenyHandler}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImg}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerImg: {
    height: 26,
    width: 26,
    marginRight: 10,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  backGroudnImg: {
    position: "absolute",
    top: -15,
    left: -16,
    right: -16,
    bottom: -10,
  },
});
