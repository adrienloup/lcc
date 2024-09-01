import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChildrenType } from '../models/ChildrenType';
import { DataType } from '../models/DataType';

const initialValue = {
  websiteName: 'Website Name',
  whatPurpose: 'Read a page of content',
  visitorsPerMonth: 2500,
  averageTime: 3,
  visitorsLocated: 'fr',
  mobileVisitors: 70,
  pagesViewed: 5,
  serversUsed: 2,
  serversLocated: 'eu',
  scores: [0],
};

export const DataContext = createContext<{
  data: DataType;
  setData: (data: {
    websiteName: string;
    whatPurpose: string;
    visitorsPerMonth: number;
    averageTime: number;
    visitorsLocated: string;
    mobileVisitors: number;
    pagesViewed: number;
    serversUsed: number;
    serversLocated: string;
    scores: number[];
  }) => void;
}>({
  data: initialValue,
  setData: (data: {
    websiteName: string;
    whatPurpose: string;
    visitorsPerMonth: number;
    averageTime: number;
    visitorsLocated: string;
    mobileVisitors: number;
    pagesViewed: number;
    serversUsed: number;
    serversLocated: string;
    scores: number[];
  }) => data,
});

export function DataProvider({ children }: ChildrenType) {
  const [data, setData] = useLocalStorage('_ccv_1em0m_3_data', initialValue);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
