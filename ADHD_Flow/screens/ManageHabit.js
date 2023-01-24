import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import HabitForm from '../components/ManageHabit/HabitForm';
import ErrorOverlay from '../components/ui/ErrorOverlay';
import IconButton from '../components/ui/IconButton';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { GlobalStyles } from '../constants/styles';
import { HabitsContext } from '../store/habits-context';
import { storeHabit, updateHabit, deleteHabit } from '../util/http';

function ManageHabit({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const habitsCtx = useContext(HabitsContext);

  const editedHabitId = route.params?.habitId; // "?" conditional operator to check whether it is undefined
  const isEditing = !!editedHabitId; 

  const selectedHabit = habitsCtx.habits.find(
    (habit) => habit.id === editedHabitId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Habit' : 'Add Habit',
    });
  }, [navigation, isEditing]);

  async function deleteHabitHandler() {
    setIsSubmitting(true);
    try {
      await deleteHabit(editedHabitId);
      habitsCtx.deleteHabit(editedHabitId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete habit - please try again later!');
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(habitData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        habitsCtx.updateHabit(editedHabitId, habitData);
        await updateHabit(editedHabitId, habitData);
      } else {
        const id = await storeHabit(habitData);
        habitsCtx.addHabit({ ...habitData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <HabitForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedHabit}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteHabitHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageHabit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});