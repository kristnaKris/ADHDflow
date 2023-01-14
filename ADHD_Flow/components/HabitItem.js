// deprecated component

import { StyleSheet, View, Text, Pressable } from 'react-native';

function HabitItem(props) {
  return (
    <View style={styles.habitItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.habitText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default HabitItem;

const styles = StyleSheet.create({
  habitItem: {
    marginTop: 16,
    marginHorizontal: 8,
    padding: 10,
    height: 70,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  habitText: {
    color: 'white',
    padding: 8,
    fontSize: 20,
  },
});