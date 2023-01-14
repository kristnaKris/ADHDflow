import { FlatList } from 'react-native';

import HabitItem from './HabitItem';

function renderHabitItem(itemData) {
  return <HabitItem {...itemData.item} />;
}

function HabitsList({ habits }) {
  return (
    <FlatList
      data={habits}
      renderItem={renderHabitItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default HabitsList;