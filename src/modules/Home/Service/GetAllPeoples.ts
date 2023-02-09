import { People } from '../domain/interfaces/IPeople';

export function GetAllPeoples(): People[] {
  const itens = localStorage.getItem('peoples');

  if (!itens) {
    return [];
  }

  return JSON.parse(itens);
}
