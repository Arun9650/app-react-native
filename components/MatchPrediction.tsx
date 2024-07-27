import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import SubText from "./Subtext";
import { Ionicons } from "@expo/vector-icons";

const MatchPrediction = () => {
  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Function to open the bottom sheet
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  // Function to close the bottom sheet
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Kolkata to win the match vs Mumbai?</Text>
          <Text style={styles.subtitle}>
            H2H last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0
          </Text>
        </View>

        <Image
          source={require("../assets/images/ipl.png")}
          alt="icon"
          style={styles.image}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleOpenBottomSheet}
          style={styles.buttonYes}
        >
          <Text style={styles.buttonTextYes}>Yes ₹ 5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNo}>
          <Text style={styles.buttonTextNo}>NO ₹ 4.7</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
          <View
            style={{
              flex: 0,
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <SubText
              text={"Preview"}
              family={"Poppins-med"}
              size={16}
              color={"#86827e"}
            />
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ paddingVertical: 16 }}>
            <SubText
              text={"Unyime Emmanuel"}
              // family={"PoppinsSBold"}
              color={"#292929"}
              size={18}
            />
            <SubText
              text={`I'm a Software Engineer and Technical Writer, I've had the TypeScript epiphany!. Oh, I play Chess too!`}
              family={"Poppins"}
              color={"#86827e"}
              size={14}
            />

            <View
              style={{
                opacity: 0.2,
                height: 1,
                borderWidth: 1,
                borderColor: "#86827e",
                marginVertical: 16,
              }}
            />
            <View
              style={{
                flex: 0,
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <SubText
                text={"24"}
                color={"#292929"}
                // family={"PoppinsSBold"}
                size={24}
              />
              <SubText
                text={" articles written"}
                color={"#86827e"}
                size={14}
                // family={"Poppins-med"}
              />
            </View>

            <View style={{ paddingTop: 16 }}>
              <SubText
                text={"Views (30 days)"}
                color={"#86827e"}
                size={12}
                // family={"Poppins-med"}
              />
              <SubText
                text={"4,904"}
                color={"#292929"}
                // family={"PoppinsSBold"}
                size={18}
              />
            </View>

            <View style={{ paddingTop: 16 }}>
              <SubText
                text={"Views (30 days)"}
                color={"#86827e"}
                size={12}
                // family={"Poppins-med"}
              />
              {/* <HeadingText text={'4,904'} color={'#292929'} family={'PoppinsSBold'} size={18} /> */}
            </View>

            <View style={{ paddingTop: 16 }}>
              <SubText
                text={"Reads (30 days)"}
                color={"#86827e"}
                size={12}
                // family={"Poppins-med"}
              />
              {/* <HeadingText text={'3038'} color={'#292929'} family={'PoppinsSBold'} size={18} /> */}
            </View>

            <View style={{ paddingTop: 16, flex: 0, flexDirection: "row" }}>
              {/* <Image source={require('assets/icons/map-marker-alt.png')} /> */}
              <View style={{ paddingLeft: 12 }} />
              <SubText
                text={"Medium"}
                color={"#86827e"}
                size={14}
                // family={"Poppins-med"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.005,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    elevation: 5,
    marginVertical: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#475467",
  },
  subtitle: {
    fontSize: 11,
    color: "#888",
    marginBottom: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonYes: {
    backgroundColor: "#e6f0ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonNo: {
    backgroundColor: "#ffe6e6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTextYes: {
    color: "#1a75ff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextNo: {
    color: "#ff6666",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 16,
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default MatchPrediction;
