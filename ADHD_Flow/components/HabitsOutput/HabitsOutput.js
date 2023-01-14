import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
import HabitsList from './HabitsList';
import HabitsSummary from './HabitsSummary';

function HabitsOutput({ habits, title, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (habits.length > 0) {
    content = <HabitsList habits={habits} />;
  }
  
  return (
    <View style={styles.container}>
      <HabitsSummary habits={habits} titleText={title} />
      {content}
    </View>
  );
}

export default HabitsOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary600,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});