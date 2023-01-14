import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../../constants/styles';

function HabitItem({ id, description, duration }) {
  const navigation = useNavigation();

  function habitPressHandler() {
    navigation.navigate('ManageHabit', {
      habitId: id
    });
  }

  return (
    <Pressable
      onPress={habitPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.habitItem}>
        <View>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
        <View style={styles.durationContainer}>
          <Text style={styles.duration}>{duration} min</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default HabitItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  habitItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary50,
    maxWidth: 200,
  },
  durationContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    borderRadius: 4,
    minWidth: 80,
    maxHeight: 28,
  },
  duration: {
    color: GlobalStyles.colors.primary400,
    fontWeight: 'bold',
  },
});