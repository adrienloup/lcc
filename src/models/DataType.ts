export interface DataType {
  websiteName: string;
  whatPurpose: string;
  visitorsPerMonth: number;
  averageTime: number;
  visitorsLocated: string;
  mobileVisitors: number;
  pagesViewed: number;
  serversUsed: number;
  serversLocated: string;
  [key: string | number]: string | number;
}
