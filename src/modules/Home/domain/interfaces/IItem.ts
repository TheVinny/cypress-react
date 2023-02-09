import { People } from './IPeople';

export interface IItem {
  index: number;
  item: People;
  openModal: (e: HTMLElement | null) => void;
}
