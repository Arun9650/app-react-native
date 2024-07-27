import { Image, StyleSheet, Platform, Text, View, ScrollView, Dimensions, TouchableOpacity } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SafeAreaView ,  } from "react-native-safe-area-context";
import MatchPrediction from "@/components/MatchPrediction";
import { useState } from "react";

export default function HomeScreen() {
  


  const MatchItems = Array.from({ length: 10 });

  const items = [
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
    {
      title: "Cricket",
      image: require("../../assets/images/bitcoin.png"),
    },
  ]



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 12,
        }}
        >
        <Feather name="user" size={24} color="black" />
        <Octicons name="bell" size={24} color="black" />
      </View>
      <Image
        source={require("../../assets/images/swimmer.png")}
        width={250}
        height={200}
        alt="swimmer"
        />
    
    <ScrollView style={styles.horizontalContainer} horizontal showsHorizontalScrollIndicator={false} > 
      {
        items.map((item, index) => {
          return (
            <HelloWave
            key={index}
            title={item.title}
            image={item.image}
            />
          )
        })
      }
    </ScrollView>
    <View style={styles.MatchPredictionContainer} >
      {
        MatchItems.map((_, index) => (
          <MatchPrediction key={index} />
        ))
      }
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    overflow: "scroll",
    borderColor: "black",
    borderWidth: 0.5,
    marginVertical: 10,

  },
  MatchPredictionContainer: {
    backgroundColor: '#f0f0f0',

  },
});
