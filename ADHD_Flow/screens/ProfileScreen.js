import React, { useContext } from 'react'
import { StyleSheet, Text, SafeAreaView,  } from 'react-native';

import { AuthContext } from '../store/auth-context';
import Button from '../components/ui/Button';


function ProfileScreen() {
    const authCtx = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <Text>ProfileScreen</Text>
            <Button onPress={authCtx.logout}>Log out</Button>
        </SafeAreaView>
    )
}
export default ProfileScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
})