import React from 'react'
import { StyleSheet, Text, SafeAreaView,  } from 'react-native';


function ExploreScreen() {
    return (
        <SafeAreaView style={styles.rootContainer}>
                <Text>ExploreScreen</Text>
        </SafeAreaView>
    )
}
export default ExploreScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
})


