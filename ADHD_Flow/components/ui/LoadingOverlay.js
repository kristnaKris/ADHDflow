import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    color: GlobalStyles.colors.primary50,
  },
});