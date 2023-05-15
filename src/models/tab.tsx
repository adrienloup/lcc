import { DataProps } from './data';

export interface TabProps {
  data?: DataProps['data'];
  active?: string;
  click?: (id: string) => void;
}