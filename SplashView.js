import {View, StyleSheet, Image} from 'react-native'
import splash1 from './assets/splash1.png'
import Home from './screens/Welcome'


export default function SplashScreen(){

    return (
    <>
        <View style={styles.main}>
        <View>
            <Image style={styles.Image} source={splash}/>
        </View>
        </View>
    </>
    )
}


const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        // backgroundColor: "#1e1e1e" 
    },
    Image: {
        resizeMode: "cover",
    }
})