function getShower(visitorsPerMonth: number, pagesViewed: number) {
  return Math.round((visitorsPerMonth * 12 * 6 * pagesViewed) / 100 / 55);
}

export default getShower;
