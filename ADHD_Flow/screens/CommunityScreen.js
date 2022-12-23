// I only used this screen to test stuff so far, ignore everything here

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function CommunityScreen() {

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


    return (
        <View style={styles.rootContainer}>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Text>selected: {time.toLocaleString()}</Text>
                <View style={styles.dateTimePickerIOS}>
                    {show && (
                        <DateTimePicker
                            value={time}
                            mode="time"
                            is24Hour={true}
                            onChange={onChange}
                            style={styles.dateTimePickerIOS}
                            accentColor='red'
                            textColor='red'
                            display='compact'
                        />
                    )}
                </View>
                <Text>{(time.getHours() < 10 ? '0' : '') + time.getHours()}:{(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}</Text>
            </View>
        </View>
    )
}
export default CommunityScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "grey",
        padding: 62,
    },
    dateTimePickerIOS: {
        textColor: "red",
        fontSize: 20,
    },
})