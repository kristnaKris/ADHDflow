import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import DailyChallenge from '../components/svgs/DailyChallenge';
import StartYourDayEvening from '../components/svgs/StartYourDayEvening';
import StartYourDayMorning from '../components/svgs/StartYourDayMorning';
import YourProgressSleeping from '../components/svgs/YourProgressSleeping';
import YourProgressEllipses from '../components/svgs/YourProgressEllipses';


function HomeScreen() {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

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
                    <View style={styles.dailyChallengeRight}>
                        <DailyChallenge />
                    </View>
                </LinearGradient>

                <View style={styles.startYourDayContainer}>
                    <Text style={styles.startYourDayTitle}>Start din dag</Text>
                    <LinearGradient
                        style={styles.startYourDayRoutines}
                        colors={['#82A8F387', '#82A8F3']}
                    >
                        <Text style={styles.startYourDayText}>Opsæt {'\n'}morgenrutine</Text>
                        <StartYourDayMorning />
                    </LinearGradient>
                    <LinearGradient
                        style={styles.startYourDayRoutines}
                        colors={['#452C7C', '#4E2E92', '#6934DAED']}
                    >
                        <Text style={styles.startYourDayText}>Opsæt {'\n'}aftenrutine</Text>
                        <StartYourDayEvening />
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
                            <YourProgressSleeping />
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        backgroundColor: "#2C166A",
    },
    screenContainer: {
        width: "85%",
    },

    dailyChallengeContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 15,
        height: 200,
        overflow: 'hidden',
        marginTop: 16,
    },
    dailyChallengeLeft: {
        paddingLeft: 24,
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
    dailyChallengeRight: {
        justifyContent: "flex-end"
    },

    startYourDayContainer: {
        marginTop: 36,
    },
    startYourDayTitle: {
        color: "white",
        fontSize: 22,
        marginBottom: 20,
    },
    startYourDayRoutines: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
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
        marginTop: 16,
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