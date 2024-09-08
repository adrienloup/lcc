import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useData } from '../hooks/useData';
import { ChildrenType } from '../models/ChildrenType';
import { ScoreType } from '../models/ScoreType';
import getEnergyLocations from '../metrics/getEnergyLocations';
import getPlug from '../metrics/getPlug';
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

const initialValue: ScoreType = {
  plug: 0,
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

export const ScoreContext = createContext<{
  score: ScoreType;
  setScore: (score: ScoreType) => void;
}>({
  score: initialValue,
  setScore: (score: ScoreType) => score,
});

export function ScoreProvider({ children }: ChildrenType) {
  const [score, setScore] = useLocalStorage('_ccv_1em0m_3_score', initialValue);
  const { data } = useData();

  useEffect(() => {
    const plug = getPlug(
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

    setScore({
      ...score,
      plug,
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
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
