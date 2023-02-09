import { People } from '../domain/interfaces/IPeople';

export function GetAllPeoples(): People[] {
  const itens = localStorage.getItem('peoples');

  if (!itens) return [];

  const peoples = JSON.parse(itens) as People[];

  return peoples;
}
