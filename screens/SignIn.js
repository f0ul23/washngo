import React, { useState } from "react";
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
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import leftbtm from "../assets/leftbtm.png";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import or from '../assets/or.png'


const SignIn = () => {
  const navigation = useNavigation();

  const [display, setDisplay] = useState(true)

  const srch = async(email)=>{
    const url = `http://192.168.29.226:3000/users?q=${email}`;
    let result = await fetch(url)
    // console.warn(url)
    result = await result.json()
    if(result){
        navigation.navigate('Home')
    }
}

  return (
    <>
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.headtxt}>
        <Text style={styles.txt}>Sign In</Text>
        <Text style={styles.txt2}>
          Hi ! Welcome back, you have been missed
        </Text>
      </View>
      <KeyboardAvoidingView>
      <View style={styles.form}>
        <Text style={{marginLeft: 5, paddingVertical: 12, fontSize: 15, fontWeight: "bold"
}}>Email</Text>
        <View style={styles.inputBox}>
        <MaterialCommunityIcons name="email-outline" size={24} color="gray"/>
          <TextInput style={styles.inputField} placeholder="xyz@gmail.com"></TextInput>
        </View>
        <Text style={{marginLeft: 5, paddingVertical: 12, fontSize: 15, fontWeight: "bold"
}}>Password</Text>
        <View style={styles.inputBox}>
        <Feather name="lock" size={24} color="gray" />
          <TextInput style={styles.inputField} placeholder="password" secureTextEntry={display}></TextInput>
          <FontAwesome6 name="eye" size={20} color="gray" style={{marginLeft: 230}} onPress={()=>setDisplay(false)}/>
        </View>
      </View>
      <View style={styles.btm1}>
        <Text style={styles.btmtxt1}>Forgot password?</Text>
      </View>
      <View style={styles.btnview}>
        <Pressable
        onPress={srch}
        >
          <Text style={styles.btn}>Sign In</Text>
        </Pressable>
      </View>
      </KeyboardAvoidingView>
      <Image source={or} style={styles.or} />
      <View style={styles.iconbar}>
      <View style={styles.icons} ><FontAwesome5 name="google" size={15} color="black" /></View>
      <View style={styles.icons} ><Fontisto name="apple" size={15} color="black" /></View>
      </View>
      <View style={styles.btm}>
        <Text style={{ color: "gray" }}>Already have an account? </Text>
        <Text style={styles.btmtxt}> Sign Up</Text>
      </View>
      <Text style={{ color: "gray", alignSelf: "center",top: 740, marginVertical:40,position: "absolute", marginHorizontal:20 }}>By login or sign up, you agree to our terms of use and</Text>
      <Text style={{ color: "gray", alignSelf: "center",top: 760, marginVertical:40,position: "absolute", marginHorizontal:20 }}>privacy policy</Text>
      <Image source={leftbtm} style={styles.sidelogo} />
    </SafeAreaView>
    </>
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
    marginBottom:25,
    fontSize: 15,
    color: "gray",
    width: 180,
    left: 18,
    textAlign: "left",
    fontWeight: "500",
    // paddingLeft: 24,
  },
  form: {
    marginHorizontal:10
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
    borderRadius: 7
  },
  inputField: {
    color: "gray",
    fontSize: 13,
    // textAlign: "center",
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
    marginHorizontal:20,
  },
  btn: {
    // flex:1,
    fontSize: 26,
    color: "#00308f",
    fontWeight: "600",
  },
  btm: {
    top: 740,
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute"
  },
  btmtxt: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  btm1: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  btmtxt1: {
    flex:1,
    fontWeight: "600",
    fontSize: 15,
    textAlign: "right",
    textDecorationLine: "underline"
  },
  sidelogo: {
    marginTop: -35,
    width: 200,
    height: 180,
    // alignSelf: "flex-end",
    alignSelf: "flex-start",
},
iconbar: {
    flex: 1,
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
    justifyContent: "center"
},
icons: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#94C7FF",
    width: 40,
    height: 40,
    padding: 10.8,
    alignSelf: "center",
},
or: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 70,
    marginVertical: 20
}
});

export default SignIn;
