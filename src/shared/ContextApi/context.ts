import { createContext } from 'react';
import { People } from '../../modules/Home/domain/interfaces/IPeople';

interface IContextValues {
  setPeoples: (people: People[]) => void;
  peoples: People[];
  setPeople: (people: People | undefined) => void;
  people: People | undefined;
}

export const Context = createContext<IContextValues>({
  setPeoples: () => null,
  peoples: [],
  people: undefined,
  setPeople: () => null,
});
