import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChildrenType } from '../models/ChildrenType';

export const ProgressContext = createContext<{
  progress: {
    value: number;
    page: string;
  };
  setProgress: (progress: { value: number; page: string }) => void;
}>({
  progress: {
    value: 0,
    page: '',
  },
  setProgress: (progress: { value: number; page: string }) => progress,
});

export function ProgressProvider({ children }: ChildrenType) {
  const [progress, setProgress] = useLocalStorage('_lcc_1em0m_3_progress', {
    value: 0,
    page: '',
  });

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}
