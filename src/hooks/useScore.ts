import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

export function useScore() {
  return useContext(ScoreContext);
}
