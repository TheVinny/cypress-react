import { People } from '../domain/interfaces/IPeople';

export function savePeoples(peoples: People[]) {
  localStorage.setItem('peoples', JSON.stringify(peoples));
}
