import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';


import MorningRoutineActivitiesSVG from '../components/svgs/MorningRoutineActivitiesSVG';
import HabitPickerModal from '../components/HabitPickerModal';


function ActivitiesScreen() {

    // <>
    // DateTimePicker stuff for setting the alarm
    // currently only works on Android
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

    // <>
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddHabitHandler() {
        setModalIsVisible(true);
    }

    function endAddHabitlHandler() {
        setModalIsVisible(false);
    }
    // </>
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View>
                <MorningRoutineActivitiesSVG />
                <Pressable onPress={showTimepicker}
                    android_ripple={{ color: '#9f85c0ff' }}
                    style={styles.headerAlarmGroup}
                >
                    <Ionicons name="alarm-outline" color={"#D9D9D9"} size={32} style={{ paddingRight: 8 }} />
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
                </Pressable>
            </View>

            <View style={styles.headerHabits}>
                <View>
                    <Text>x habits</Text>
                    <Text>Today</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text>+</Text>
                    <Text>...</Text>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <Text style={{ textAlign: 'center' }}>
                    No habits added yet{"\n"}
                    {"\n"}
                    User, go ahead and choose a habit.{"\n"}
                    Or start a journey and allow us to{"\n"}
                    guide you!{"\n"}
                    {"\n"}
                    <Pressable onPress={startAddHabitHandler}>
                        <Text style={{ textAlign: 'center' }}>Add habits button</Text>
                    </Pressable>
                </Text>
            </View>
            <HabitPickerModal
                visible={modalIsVisible}
                onCancel={endAddHabitlHandler} />

        </SafeAreaView>
    )
}
export default ActivitiesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    headerAlarmGroup: {
        flexDirection: "row",
        alignItems: "center",
        position: 'absolute',
        bottom: 15,
        left: 15,
    },
    headerAlarmText: {
        color: "#D9D9D9",
        fontSize: 18,
    },
    headerHabits: {
        flexDirection: "row",
        height: 75,
        backgroundColor: "#af9e9e",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 16,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
    },

})