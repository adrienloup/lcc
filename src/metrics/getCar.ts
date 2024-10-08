function getCar(
  visitorsPerMonth: number,
  averageTime: number,
  visitorsLocated: number,
  mobileVisitors: number,
  pagesViewed: number,
  serversUsed: number,
  serversLocated: number
) {
  return Math.round(
    (((((visitorsPerMonth * 12 * averageTime) / 60) *
      (1 - mobileVisitors / 100)) /
      (220 * 7)) *
      75 *
      visitorsLocated +
      ((((visitorsPerMonth * 12 * averageTime) / 60) * (mobileVisitors / 100)) /
        (365 * 4)) *
        30 *
        visitorsLocated +
      ((((visitorsPerMonth * 12 * averageTime) / 60) *
        (1 - mobileVisitors / 100)) /
        (220 * 7)) *
        30.8 *
        visitorsLocated +
      ((((visitorsPerMonth * 12 * averageTime) / 60) *
        (1 - mobileVisitors / 100)) /
        (220 * 7)) *
        (189 / 5) +
      ((((visitorsPerMonth * 12 * averageTime) / 60) * (mobileVisitors / 100)) /
        (365 * 4)) *
        (169 / 4) +
      ((((visitorsPerMonth * 12 * averageTime) / 60) *
        (1 - mobileVisitors / 100)) /
        (220 * 7)) *
        (265 / 6) +
      ((visitorsPerMonth * 12 * averageTime) / 60 / (24 * 365)) *
        150 *
        visitorsLocated +
      ((visitorsPerMonth * 12 * averageTime) / 60 / (24 * 365)) * (83 / 5) +
      ((visitorsPerMonth * 12 * pagesViewed * 2.1) / 1024) * 0.002 +
      ((450 * 365 * 24) / 1000) * 0.6 * serversUsed * 1.8 * serversLocated +
      serversUsed * (756 / 5)) /
      0.1
  );
}

export default getCar;
