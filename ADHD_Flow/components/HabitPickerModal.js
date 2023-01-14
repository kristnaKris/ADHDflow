// deprecated component

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable, Platform, Modal, Button, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';


import MorningRoutineActivitiesSVG from '../components/svgs/MorningRoutineActivitiesSVG';
import ManageHabit from '../screens/ManageHabit';


function HabitPickerModal(props) {

    const [enteredHabitText, setEnteredHabitText] = useState('');

    function habitInputHandler(enteredText) {
        setEnteredHabitText(enteredText);
    }

    function addHabitHandler() {
        props.onAddHabit(enteredHabitText);
        setEnteredHabitText('');
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <SafeAreaView style={styles.rootContainer}>
                <View>
                    <MorningRoutineActivitiesSVG />
                </View>

                <View style={styles.headerHabits}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Ionicons name="search-outline" size={26} />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Search or add a new habit" onChangeText={habitInputHandler} value={enteredHabitText} />
                    </View>
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='never' keyboardDismissMode="on-drag">
                    <View style={styles.contentContainer}>
                        <Button title="Add Habit" onPress={addHabitHandler} color="#b180f0" />
                        <Button title="Cancel" onPress={props.onCancel} color="#65c6f3" />

                        <ManageHabit/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}
export default HabitPickerModal;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    headerHabits: {
        flexDirection: "row",
        height: 75,
        backgroundColor: "#af9e9e",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 4,
    },
    textInput: {
        flex: 5,
        backgroundColor: "grey",
        height: 40,
        fontSize: 28,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 6,
        padding: 3,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-between",
    },

})