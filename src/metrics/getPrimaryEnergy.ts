function getPrimaryEnergy(
  visitorsPerMonth: number,
  averageTime: number,
  mobileVisitors: number,
  serversUsed: number
) {
  return Math.round(
    ((((visitorsPerMonth * 12 * averageTime) / 60) *
      (1 - mobileVisitors / 100)) /
      (220 * 7)) *
      75 +
      ((((visitorsPerMonth * 12 * averageTime) / 60) * (mobileVisitors / 100)) /
        (365 * 4)) *
        30 +
      ((((visitorsPerMonth * 12 * averageTime) / 60) *
        (1 - mobileVisitors / 100)) /
        (220 * 7)) *
        30.8 +
      ((visitorsPerMonth * 12 * averageTime) / 60 / (24 * 365)) * 150 +
      ((450 * 365 * 24) / 1000) * (60 / 100) * serversUsed * 1.8
  );
}

export default getPrimaryEnergy;
