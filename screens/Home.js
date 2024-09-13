import {React, useState, useEffect} from "react";
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

  
  
const Home = () => {

  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = "http://192.168.29.226:3000/users";
    let result = await fetch(url)
    result = await result.json()
    if (result) {
        console.warn(result)
        setData(result[result.length-1])
    }
  }
  useEffect(() => {
getApiData()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.headtxt}>
      {
              <View><Text style={styles.txt}>Welcome {data.name}</Text></View>
      }
      </View>
      <KeyboardAvoidingView>
      <View style={styles.btnview}>
        <Pressable
            onPress={()=>navigation.navigate("Welcome")}
        >
          <Text style={styles.btn}>Logout</Text>
        </Pressable>
      </View>
      </KeyboardAvoidingView>
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
  txt: {
    top: 70,
    fontSize: 34,
    color: "black",
    textAlign: "left",
    alignSelf: "center",
    fontWeight: "bold",
    left: 18,
    paddingBottom: 30,
  },
  txt2: {
    top: 25,
    marginBottom:25,
    fontSize: 15,
    color: "gray",
    width: 250,
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
    textAlign: "center",
    padding: 10,
    fontStyle: "italic",
  },
  btnview: {
    justifyContent: "center",
    backgroundColor: "#89CFF0",
    alignItems: "center",
    width: 370,
    top: 200,
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
}
});

export default Home;
