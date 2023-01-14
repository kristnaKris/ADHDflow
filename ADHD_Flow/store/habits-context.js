import { createContext, useReducer } from 'react';

export const HabitsContext = createContext({
  habits: [],
  addHabit: ({ description, duration }) => {},
  setHabits: (habits) => {},
  deleteHabit: (id) => {},
  updateHabit: (id, { description, duration }) => {},
});

function habitsReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'SET':
      return action.payload;
    case 'UPDATE':
      const updatableHabitIndex = state.findIndex(
        (habit) => habit.id === action.payload.id
      );
      const updatableHabit = state[updatableHabitIndex];
      const updatedItem = { ...updatableHabit, ...action.payload.data };
      const updatedHabits = [...state];
      updatedHabits[updatableHabitIndex] = updatedItem;
      return updatedHabits;
    case 'DELETE':
      return state.filter((habit) => habit.id !== action.payload);
    default:
      return state;
  }
}

function HabitsContextProvider({ children }) {
  const [habitsState, dispatch] = useReducer(habitsReducer, []);

  function addHabit(habitData) {
    dispatch({ type: 'ADD', payload: habitData });
  }

  function setHabits(habits) {
    dispatch({ type: 'SET', payload: habits });
  }

  function deleteHabit(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateHabit(id, habitData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: habitData } });
  }

  const value = {
    habits: habitsState,
    setHabits: setHabits,
    addHabit: addHabit,
    deleteHabit: deleteHabit,
    updateHabit: updateHabit,
  };

  return (
    <HabitsContext.Provider value={value}>
      {children}
    </HabitsContext.Provider>
  );
}

export default HabitsContextProvider;