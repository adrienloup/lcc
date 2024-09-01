function getRawMaterials(
  visitorsPerMonth: number,
  averageTime: number,
  mobileVisitors: number,
  serversUsed: number
) {
  return (
    ((((visitorsPerMonth * 12 * averageTime) / 60) *
      (1 - mobileVisitors / 100)) /
      (220 * 7)) *
      (572 / 5) +
    ((((visitorsPerMonth * 12 * averageTime) / 60) * (mobileVisitors / 100)) /
      (365 * 4)) *
      (572 / 5) +
    ((((visitorsPerMonth * 12 * averageTime) / 60) *
      (1 - mobileVisitors / 100)) /
      (220 * 7)) *
      (1689 / 5) +
    ((visitorsPerMonth * 12 * averageTime) / 60 / (24 * 365)) * (425 / 5) +
    serversUsed * (2288 / 5)
  );
}

export default getRawMaterials;
