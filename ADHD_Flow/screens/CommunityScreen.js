import { StyleSheet, Text, SafeAreaView,  } from 'react-native';

function CommunityScreen() {
    return (
        <SafeAreaView style={styles.rootContainer}>
                <Text>CommunityScreen</Text>
        </SafeAreaView>
    )
}
export default CommunityScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
})