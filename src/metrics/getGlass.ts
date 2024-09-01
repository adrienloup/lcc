function getGlass(visitorsPerMonth: number, pagesViewed: number) {
  return (
    (visitorsPerMonth * 12 * 6 * pagesViewed) /
    100 /
    (visitorsPerMonth * 12) /
    0.18
  );
}

export default getGlass;
