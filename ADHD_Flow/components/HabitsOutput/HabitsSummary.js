import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

function HabitsSummary({ habits, titleText }) {
  const habitsSum = habits.reduce((sum, habit) => {
    return sum + habit.duration;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
      <Text style={styles.sum}>{habitsSum} minutes</Text>
    </View>
  );
}

export default HabitsSummary;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: GlobalStyles.colors.primary500,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary400,
  },
});