import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import DailyChallengeSVG from '../components/svgs/DailyChallengeSVG';
import StartYourDayMorningSVG from '../components/svgs/StartYourDayMorningSVG';
import StartYourDayEveningSVG from '../components/svgs/StartYourDayEveningSVG';
import YourProgressSleepingSVG from '../components/svgs/YourProgressSleepingSVG';
import YourProgressEllipsesSVG from '../components/svgs/YourProgressEllipsesSVG';

function HomeScreen() {

    const navigation = useNavigation();
    function morningRoutinePressHandler() {
        navigation.navigate('ActivitiesScreen');
    }

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView style={{ width: "85%" }} showsVerticalScrollIndicator={false}>

                <LinearGradient
                    style={styles.dailyChallengeContainer}
                    colors={['#3A2181', '#6040BD', '#825AF2']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={styles.dailyChallengeLeft}>
                        <Text style={styles.dailyChallengeLeftText}>
                            <Text style={styles.dailyChallengeLeftTextAmount}>403 andre er i gang</Text> {'\n'}
                            DIN {'\n'}
                            DAGLIGE {'\n'}
                            CHALLENGE
                        </Text>
                    </View>
                    <View style={{ justifyContent: "flex-end" }}>
                        <DailyChallengeSVG />
                    </View>
                </LinearGradient>

                <View style={styles.startYourDayContainer}>
                    <Text style={styles.startYourDayTitle}>Start din dag</Text>
                    <View style={{ marginBottom: 20 }}>
                        <Pressable onPress={morningRoutinePressHandler}
                            android_ripple={{ color: '#9f85c080' }}
                        >
                            <View style={{ overflow: "hidden" }}>
                                <LinearGradient                                 // find out why overflow doesn't work here
                                    style={styles.startYourDayRoutines}
                                    colors={['#82A8F387', '#82A8F3']}
                                >
                                    <Text style={styles.startYourDayText}>Opsæt {'\n'}morgenrutine</Text>
                                    <StartYourDayMorningSVG />
                                </LinearGradient>
                            </View>
                        </Pressable>
                    </View>

                    <LinearGradient
                        style={styles.startYourDayRoutines}
                        colors={['#452C7C', '#4E2E92', '#6934DAED']}
                    >
                        <Text style={styles.startYourDayText}>Opsæt {'\n'}aftenrutine</Text>
                        <StartYourDayEveningSVG />
                    </LinearGradient>
                </View>

                <View style={styles.yourProgressContainer}>
                    <Text style={styles.startYourDayTitle}>Dit forløb</Text>
                    <LinearGradient
                        style={styles.yourProgress}
                        colors={['#8952FFE3', '#3E1F9491']}
                    >
                        <View style={styles.yourProgressLeft}>
                            <Text style={styles.yourProgressCourseText}>Forløb: Bedre Søvn</Text>
                            <Text style={styles.yourProgressYellowText}>1. Dig &amp; din søvn</Text>
                        </View>
                        <View style={styles.yourProgressRight}>
                            <YourProgressSleepingSVG />
                        </View>
                        <View style={{ position: 'absolute', bottom: -8, left: -13, }} >
                            <YourProgressEllipsesSVG />
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {    // don't forget to tidy up the styles
        flex: 1,
        alignItems: "center",
        backgroundColor: "#2C166A",
    },

    dailyChallengeContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 15,
        height: 200,
        overflow: 'hidden',
        marginTop: Platform.OS === 'android' ? 40 : 16,
    },
    dailyChallengeLeft: {
        paddingLeft: 20,
        justifyContent: "center",
    },
    dailyChallengeLeftText: {
        color: "#ffffff",
        fontSize: 22,
    },
    dailyChallengeLeftTextAmount: {
        color: "#F4C022",
        fontSize: 11,
    },

    startYourDayContainer: {
        marginTop: 20,
    },
    startYourDayTitle: {
        color: "white",
        fontSize: 22,
        marginBottom: 20,
    },
    startYourDayRoutines: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        alignItems: "center",
        borderRadius: 15,
        height: 70,
        overflow: 'hidden',
    },
    startYourDayText: {
        color: "white",
        fontSize: 18,
    },

    yourProgressContainer: {
        marginTop: 20,
    },
    yourProgress: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        height: 200,
        overflow: 'hidden',
        marginBottom: 32,
    },
    yourProgressLeft: {
        paddingTop: 20,
        paddingLeft: 20,
    },
    yourProgressRight: {
        paddingTop: 20,
    },
    yourProgressCourseText: {
        color: "#ffffff",
        fontSize: 18,
        marginBottom: 10,
    },
    yourProgressYellowText: {
        color: "#F4C022",
        fontSize: 14,
    },
})