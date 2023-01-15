import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import MorningRoutineActivitiesSVG from '../components/svgs/MorningRoutineActivitiesSVG';
import IconButton from '../components/ui/IconButton';
import HabitsOutputLogic from '../components/HabitsOutput/HabitsOutputLogic';
import { HabitsContext } from '../store/habits-context';
import { GlobalStyles } from '../constants/styles';


function ActivitiesScreen() {

    // <>
    // DateTimePicker for setting the alarm
    const [time, setTime] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setTime(currentDate);
    };

    const showTimepicker = () => {
        setShow(true);
    };
    // </>

    const navigation = useNavigation();
    const habitsCtx = useContext(HabitsContext);
    const nmbrOfHabits = habitsCtx.habits.length;

    return (
        <SafeAreaView style={styles.rootContainer}>
            <View>
                <MorningRoutineActivitiesSVG />
                <Pressable
                    onPress={showTimepicker}
                    // android_ripple={{ color: '#9f85c0ff' }}
                    style={({ pressed }) => pressed && styles.pressed}
                >
                    <View style={styles.headerAlarmGroup}>
                        <Ionicons
                            name="alarm-outline"
                            color={GlobalStyles.colors.primary50}
                            size={32}
                            style={{ paddingRight: 8 }}
                        />
                        <Text style={styles.headerAlarmText} >Alarm{"\n"}
                            {(time.getHours() < 10 ? '0' : '') + time.getHours()}:{(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}
                        </Text>
                        {show && (
                            <DateTimePicker     //Problematic on iOS
                                value={time}
                                mode="time"
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}
                    </View>
                </Pressable>
            </View>

            <View style={styles.headerHabits}>
                <View>
                    <Text>{nmbrOfHabits} habits</Text>
                    <Text>{new Date().toLocaleString().slice(0, 10)}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <IconButton icon="add" size={30}
                        onPress={() => {
                            navigation.navigate('ManageHabit');
                        }}
                    />
                </View>
            </View>

            <View style={styles.contentContainer}>
                <HabitsOutputLogic />
            </View>

        </SafeAreaView>
    )
}
export default ActivitiesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary50,
    },
    headerAlarmGroup: {
        flexDirection: "row",
        alignItems: "center",
        position: 'absolute',
        bottom: 15,
        left: 15,
    },
    headerAlarmText: {
        color: GlobalStyles.colors.primary50,
        fontSize: 18,
    },
    headerHabits: {
        flexDirection: "row",
        height: 75,
        backgroundColor: GlobalStyles.colors.primary50,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 0.2,
    },
    contentContainer: {
        flex: 1,
        width: "100%",
    },
    pressed: {
        opacity: 0.75,
    },

})