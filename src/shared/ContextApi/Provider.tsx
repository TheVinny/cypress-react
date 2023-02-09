import { ReactElement, useState } from 'react';
import { People } from '../../modules/Home/domain/interfaces/IPeople';
import { Context } from './context';

export function Provider({ children }: { children: ReactElement }) {
  const [peoples, setPeoples] = useState<People[]>([]);
  const [people, setPeople] = useState<People | undefined>();
  return (
    <Context.Provider value={{ setPeoples, peoples, people, setPeople }}>
      {children}
    </Context.Provider>
  );
}
