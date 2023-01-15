import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import DailyChallengeSVG from '../components/svgs/DailyChallengeSVG';
import StartYourDayMorningSVG from '../components/svgs/StartYourDayMorningSVG';
import StartYourDayEveningSVG from '../components/svgs/StartYourDayEveningSVG';
import YourProgressSleepingSVG from '../components/svgs/YourProgressSleepingSVG';
import YourProgressEllipsesSVG from '../components/svgs/YourProgressEllipsesSVG';
import { GlobalStyles } from '../constants/styles';

function HomeScreen() {

    const navigation = useNavigation();
    function morningRoutinePressHandler() {
        navigation.navigate('ActivitiesScreen');
    }

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ScrollView
                style={{ width: "85%" }}
                showsVerticalScrollIndicator={false}
            >

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
                            // android_ripple={{ color: '#9f85c080' }}
                            style={({ pressed }) => pressed && styles.pressed}
                        >
                            <LinearGradient
                                style={styles.startYourDayRoutines}
                                colors={['#82A8F387', '#82A8F3']}
                            >
                                <Text style={styles.startYourDayText}>Opsæt {'\n'}morgenrutine</Text>
                                <StartYourDayMorningSVG />
                            </LinearGradient>
                        </Pressable>
                    </View>

                    <Pressable
                        // onPress={}
                        style={({ pressed }) => pressed && styles.pressed}
                    >
                        <LinearGradient
                            style={styles.startYourDayRoutines}
                            colors={['#452C7C', '#4E2E92', '#6934DAED']}
                        >
                            <Text style={styles.startYourDayText}>Opsæt {'\n'}aftenrutine</Text>
                            <StartYourDayEveningSVG />
                        </LinearGradient>
                    </Pressable>
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
    rootContainer: {    // I'm sorry for the mess of these styles, will restructure it later, paying more attention to it in the following components
        flex: 1,
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary800,
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
        color: GlobalStyles.colors.primary50,
        fontSize: 22,
    },
    dailyChallengeLeftTextAmount: {
        color: GlobalStyles.colors.accent500,
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
        color: GlobalStyles.colors.primary50,        
        fontSize: 18,
        marginBottom: 10,
    },
    yourProgressYellowText: {
        color: GlobalStyles.colors.accent500,
        fontSize: 14,
    },
    pressed: {
        opacity: 0.75,
    },
})