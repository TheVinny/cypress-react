import { People } from '../domain/interfaces/IPeople';

export function DeletePeople(peoples: People[], index: number) {
  const newPeoples = peoples.splice(index, 1);

  localStorage.setItem('peoples', JSON.stringify(newPeoples));
}
