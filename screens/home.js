import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "GTA5",
      rating: 5,
      body:
        "In Grand Theft Auto V, fans will find not only the largest and most detailed world ever created by Rockstar Games, but also the opportunity to influence the lives and actions of the three main characters. This interweaving of stories of several characters will make the game as exciting and exciting as possible. ",
      id: "1",
    },
    {
      title: "NFS Underground 2",
      rating: 4,
      body:
        "The game does not have a full story. The game has several modes and one of them is a career mode. In this mode, the player needs to select one of the available starting machines and set foot on the path of a professional street racer.",
      id: "2",
    },
    {
      title: "Witcher 3",
      rating: 4,
      body:
        "Become monster slayer Geralt of Rivia and take on the most important contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
      id: "3",
    },
  ]);

  const addReview = (review) => {
    review.id = Math.random().toString();
    setReviews((currentReview) => [review, ...currentReview]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        keyExtractor={(item) => item.id}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
