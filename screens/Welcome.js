import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import logo from "../assets/logo.png";
import sidelogo from "../assets/sidelogo.png";
import leftlogo from "../assets/leftlogo.png";
// import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";
import SignUp from "./SignUp";
import { useNavigation } from "@react-navigation/native";




const Welcome = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Image source={leftlogo} style={styles.leftlogo} />
          <Image source={sidelogo} style={styles.sidelogo} />
        </View>
        <Image source={logo} style={styles.logo} />
        <View style={styles.headtxt}>
          <Text style={styles.txt}>
            Sparkle & Shine Transform Your Drive with Every Wash!
          </Text>
        </View>
        <View style={styles.btnview}>
        <Pressable
        onPress={()=>navigation.navigate("SignUp")}
        >
            <Text style={styles.btn}>Let's Start</Text>
        </Pressable>
        </View>
        <View style={styles.btm}>
        <Text style={{color: "gray"}}>Already have an account? </Text>
        <Text style={styles.btmtxt}> Sign in</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 382,
    height: 280,
    top: 190,
    alignSelf: "center",
  },
  headtxt: {
    top: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 24,
    color: "gray",
    textAlign: "center",
    fontWeight: "600",
    width: 420,
    padding: 55,
  },
  btnview: {
    justifyContent: "center",
    backgroundColor: "#94C7FF", 
    alignItems: "center",
    width: 380,
    height: 61,
    borderRadius: 32,
    top: 200,
    margin:15,
    shadowColor: "#94C7FF",
    elevation: 16
  },
  btn: {
    fontSize: 26,
    color: "#00308F",
    fontWeight: "600",
  },
  btm: {
    top: 200,
    alignSelf: "center", 
    flexDirection: "row"
  },
  btmtxt: {
    textDecorationLine: "underline",
    fontWeight: "600",
  }
});

export default Welcome;
