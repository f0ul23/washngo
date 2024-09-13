import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import bottomlogo from "../assets/bottomlogo.png";
import Checkbox from "expo-checkbox";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const SignUp = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const [display, setDisplay] = useState(true)


  const handleRegister = async () => {
    // console.warn(name)
    // console.warn(email)
    // console.warn(password)

    const url = "http://192.168.29.226:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name, email, password}),
    }).then(navigation.navigate("SignIn"))
    result = await result.json();
    // console.warn(result);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.headtxt}>
        <Text style={styles.txt}>Sign Up</Text>
        <Text style={styles.txt2}>
          Fill in the below form and add life to your car!
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View style={styles.form}>
          <Text
            style={{
              marginLeft: 5,
              paddingVertical: 15,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Name
          </Text>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={24} color="gray" />
            <TextInput
              style={styles.inputField}
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => setName(text)}
            ></TextInput>
          </View>
          <Text
            style={{
              marginLeft: 5,
              paddingVertical: 12,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Email
          </Text>
          <View style={styles.inputBox}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="gray"
            />
            <TextInput
              style={styles.inputField}
              placeholder="xyz@gmail.com"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <Text
            style={{
              marginLeft: 5,
              paddingVertical: 12,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Password
          </Text>
          <View style={styles.inputBox}>
            <Feather name="lock" size={24} color="gray" />
            <TextInput
              style={styles.inputField}
              placeholder="password"
              secureTextEntry={display}
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <FontAwesome6 name="eye" size={20} color="gray" style={{marginLeft: 230}} onPress={()=>setDisplay(false)}/>
          </View>
        </View>
        <View style={styles.btm1}>
          <Checkbox
            style={{
              marginHorizontal: 15,
              color: "gray",
              borderRadius: 5,
              borderWidth: 1,
              width: 22,
              height: 23,
            }}
          />
          <Text style={styles.btmtxt1}>Agree with </Text>
          <Text style={{ color: "gray", textDecorationLine: "underline" }}>
            {" "}
            Terms & Conditions
          </Text>
        </View>
        <View style={styles.btnview}>
          <Pressable onPress={handleRegister}>
            <Text style={styles.btn}>Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.btm}>
        <Text style={{ color: "gray" }}>Don't have an account? </Text>
        <Text style={styles.btmtxt}> Sign in</Text>
      </View>
      <Text
        style={{
          color: "gray",
          alignSelf: "center",
          top: 750,
          marginVertical: 40,
          position: "absolute",
          marginHorizontal: 20,
        }}
      >
        By login or sign up, you agree to our terms of use and
      </Text>
      <Text
        style={{
          color: "gray",
          alignSelf: "center",
          top: 770,
          marginVertical: 40,
          position: "absolute",
          marginHorizontal: 20,
        }}
      >
        privacy policy
      </Text>
      <Image source={bottomlogo} style={styles.sidelogo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 230,
    height: 170,
    top: 50,
    alignSelf: "center",
  },
  headtxt: {
    alignItems: "left",
  },
  txt: {
    top: 50,
    fontSize: 34,
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    left: 18,
    paddingBottom: 30,
  },
  txt2: {
    top: 25,
    marginBottom: 25,
    fontSize: 15,
    color: "gray",
    width: 250,
    left: 18,
    textAlign: "left",
    fontWeight: "500",
    // paddingLeft: 24,
  },
  form: {
    marginHorizontal: 10,
    // alignItems:"center"
  },
  inputBox: {
    // flex: 1,
    marginVertical: 0,
    flexDirection: "row",
    padding: 5,
    height: 55,
    width: 377,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 7,
    borderRadius: 7,
  },
  inputField: {
    color: "black",
    fontSize: 13,
    padding: 10,
    fontStyle: "italic",
  },
  btnview: {
    justifyContent: "center",
    backgroundColor: "#89CFF0",
    alignItems: "center",
    width: 370,
    height: 61,
    borderRadius: 32,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: "#94C7FF",
    shadowColor: "#94C7FF",
    elevation: 50,
    marginHorizontal: 20,
  },
  btn: {
    // flex:1,
    fontSize: 26,
    color: "#00308f",
    fontWeight: "600",
  },
  btm: {
    top: 750,
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
  },
  btmtxt: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  btm1: {
    marginVertical: 20,
    marginHorizontal: 12,
    alignSelf: "left",
    flexDirection: "row",
  },
  btmtxt1: {
    fontWeight: "600",
    fontSize: 14,
  },
  sidelogo: {
    // flex:1,
    marginTop: -35,
    // top:700,
    width: 200,
    height: 180,
    alignSelf: "flex-end",
  },
});

export default SignUp;
