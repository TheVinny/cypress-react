import { useContext } from 'react';
import { Context } from '../../../shared/ContextApi/context';

export function useContextApi() {
  return useContext(Context);
}
