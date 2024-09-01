function getWater(visitorsPerMonth: number, pagesViewed: number) {
  return Math.round((visitorsPerMonth * 12 * 6 * pagesViewed) / 100);
}

export default getWater;
