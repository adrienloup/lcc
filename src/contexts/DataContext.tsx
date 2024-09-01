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
  result: [0],
  // result: {
  //   plug: 0,
  //   meter: 0,
  //   coin: 0,
  //   glass: 0,
  //   house: 0,
  //   car: 0,
  //   desktop: 0,
  //   shower: 0,
  //   energy: 0,
  //   gas: 0,
  //   materials: 0,
  //   water: 0,
  // },
};

export const DataContext = createContext<{
  data: DataType;
  setData: (data: DataType) => void;
}>({
  data: initialValue,
  setData: (data: DataType) => data,
});

export function DataProvider({ children }: ChildrenType) {
  const [data, setData] = useLocalStorage('_ccv_1em0m_3_data', initialValue);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
