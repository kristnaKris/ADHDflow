import { useContext, useEffect, useState } from 'react';

import HabitsOutput from './HabitsOutput';
import ErrorOverlay from '../ui/ErrorOverlay';
import LoadingOverlay from '../ui/LoadingOverlay';
import { HabitsContext } from '../../store/habits-context';
import { fetchHabits } from '../../util/http';

function HabitsOutputLogic() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const habitsCtx = useContext(HabitsContext);

  useEffect(() => {
    async function getHabits() {
      setIsFetching(true);
      try {
        const habits = await fetchHabits();
        habitsCtx.setHabits(habits);
      } catch (error) {
        setError('Could not fetch habits!');
      }
      setIsFetching(false);
    }

    getHabits();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <HabitsOutput
      habits={habitsCtx.habits}
      title="Time spent being productive:"
      fallbackText="No habits added yet!"
    />
  );
}

export default HabitsOutputLogic;