import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
// import Svg, { Path } from "react-native-svg";
import Group_6914 from "../Svgs/Group_6914";
import Sun_banner from "../Svgs/Sun_banner";
import Group_6914_Lottie from "../Svgs/Group_6914_Lottie";
import Group_6918 from "../Svgs/Group_6918";
import Rectangle_235 from "../Svgs/Rectangle_235";

const HomeScreen = () => {

    const [fontsLoaded] = useFonts({
        'Montserrat_400Regular': require('../assets/fonts/Montserrat_Regular.ttf'),
    });

    const date = new Date();
    const dayOfTheWeek = date.getDay();
    const dayOfTheWeekNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    const month = date.getMonth();
    const monthNames = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.banner} >
                    {/* <Image style={styles.bannerPicture} source={require("../assets/sun_banner.jpg")} /> */}
                    <Sun_banner />
                </View>
                <View style={styles.dateBlock}>
                    <Text style={[styles.text, styles.today]}>I dag</Text>
                    <Text style={[styles.text, styles.date]}>{dayOfTheWeekNames[dayOfTheWeek]}, {date.getDate()}. {monthNames[month]}</Text>
                </View>
                <View style={styles.recommendedBlock} >
                    <Text style={styles.recommendedText} >Anbefalet indhold til dig</Text>
                    <View>
                        <Group_6914 />
                        {/* <Group_6914_Lottie style={{zIndex: -4}}/> */}
                    </View>
                </View>
                <View style={styles.activityBlock}>
                    <Text style={[styles.recommendedText, { marginBottom: "3%", }]}>Hurtige aktiviteter</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Group_6918 />
                        <Rectangle_235 />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#261863',
        flex: 1,
    },
    banner: {
        marginTop: "11.75%",
    },
    text: {
       // fontFamily: 'Montserrat_400Regular', // need to import this
        fontStyle: "normal",
    },
    today: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    },
    date: {
        color: "#F5C371",
        fontSize: 16,
    },
    dateBlock: {
        // marginLeft: 10,  ask Kristian about your px/4=% theory
        // marginTop: 12,
        // marginBottom: 28,

        marginLeft: "2.5%",
        marginTop: "3%",
        marginBottom: "7%",
    },
    recommendedBlock: {

    },
    recommendedText: {
        color: "white",
        fontSize: 20,
        marginLeft: "5%",
        marginBottom: "3.75%",
    },
    Group_6918: {
        // alignContent:"left"
        // alignSelf:"left"
        // alignItems: "left",
        // marginRight: "50%",
        // marginTop: "25%",
    },
    activityBlock: {
        marginTop: "11.5%",
        marginBottom: "30%",
    },
})