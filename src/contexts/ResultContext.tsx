import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useData } from '../hooks/useData';
import { ChildrenType } from '../models/ChildrenType';
import { ResultType } from '../models/ResultType';
import getEnergyLocations from '../metrics/getEnergyLocations';
import getMicrowave from '../metrics/getMicrowave';
import getMeter from '../metrics/getMeter';
import getCoin from '../metrics/getCoin';
import getGlass from '../metrics/getGlass';
import getHouse from '../metrics/getHouse';
import getCar from '../metrics/getCar';
import getDesktop from '../metrics/getDesktop';
import getShower from '../metrics/getShower';
import getPrimaryEnergy from '../metrics/getPrimaryEnergy';
import getGreenhouseGas from '../metrics/getGreenhouseGas';
import getRawMaterials from '../metrics/getRawMaterials';
import getWater from '../metrics/getWater';

const initialValue: ResultType = {
  microwave: 0,
  meter: 0,
  coin: 0,
  glass: 0,
  house: 0,
  car: 0,
  desktop: 0,
  shower: 0,
  primaryEnergy: 0,
  greenhouseGas: 0,
  rawMaterials: 0,
  water: 0,
};

export const ResultContext = createContext<{
  result: ResultType;
  setResult: (result: ResultType) => void;
  previousResult: ResultType;
  setPreviousResult: (previousResults: ResultType) => void;
}>({
  result: initialValue,
  setResult: (result: ResultType) => result,
  previousResult: initialValue,
  setPreviousResult: (previousResult: ResultType) => previousResult,
});

export function ResultProvider({ children }: ChildrenType) {
  const [result, setResult] = useLocalStorage(
    '_ccv_1em0m_3_result',
    initialValue
  );
  const [previousResult, setPreviousResult] = useLocalStorage(
    '_ccv_1em0m_3_previous_result',
    initialValue
  );
  const { data } = useData();

  useEffect(() => {
    const microwave = getMicrowave(
      data.visitorsPerMonth,
      data.averageTime,
      data.mobileVisitors,
      data.serversUsed
    );

    const meter = getMeter(
      data.visitorsPerMonth,
      data.averageTime,
      getEnergyLocations(data.visitorsLocated),
      data.mobileVisitors,
      data.pagesViewed,
      data.serversUsed,
      getEnergyLocations(data.serversLocated)
    );

    const coin = getCoin(
      data.visitorsPerMonth,
      data.averageTime,
      data.mobileVisitors,
      data.serversUsed
    );

    const glass = getGlass(data.visitorsPerMonth, data.pagesViewed);

    const house = getHouse(
      data.visitorsPerMonth,
      data.averageTime,
      data.mobileVisitors,
      data.serversUsed
    );

    const car = getCar(
      data.visitorsPerMonth,
      data.averageTime,
      getEnergyLocations(data.visitorsLocated),
      data.mobileVisitors,
      data.pagesViewed,
      data.serversUsed,
      getEnergyLocations(data.serversLocated)
    );

    const desktop = getDesktop(
      data.visitorsPerMonth,
      data.averageTime,
      data.mobileVisitors,
      data.serversUsed
    );

    const shower = getShower(data.visitorsPerMonth, data.pagesViewed);

    const primaryEnergy = getPrimaryEnergy(
      data.visitorsPerMonth,
      data.averageTime,
      data.mobileVisitors,
      data.serversUsed
    );

    const greenhouseGas = getGreenhouseGas(
      data.visitorsPerMonth,
      data.averageTime,
      getEnergyLocations(data.visitorsLocated),
      data.mobileVisitors,
      data.pagesViewed,
      data.serversUsed,
      getEnergyLocations(data.serversLocated)
    );

    const rawMaterials = getRawMaterials(
      data.visitorsPerMonth,
      data.averageTime,
      data.mobileVisitors,
      data.serversUsed
    );

    const water = getWater(data.visitorsPerMonth, data.pagesViewed);

    setResult({
      ...result,
      microwave,
      meter,
      coin,
      glass,
      house,
      car,
      desktop,
      shower,
      primaryEnergy,
      greenhouseGas,
      rawMaterials,
      water,
    });
  }, [data]);

  return (
    <ResultContext.Provider
      value={{ result, setResult, previousResult, setPreviousResult }}
    >
      {children}
    </ResultContext.Provider>
  );
}
