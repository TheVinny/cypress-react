import { IItemListProps } from '../domain/interfaces/ItemListProps';
import { Item } from './Item';

export function ItemList({ peoples, search }: IItemListProps) {
  return (
    <>
      {search.length
        ? peoples
            .filter(item => item.fullname.includes(search.trim()))
            .map((itens, index) => {
              return (
                <Item
                  index={index}
                  itens={itens}
                  key={index}
                  peoples={peoples}
                />
              );
            })
        : peoples.map((itens, index) => {
            return (
              <Item index={index} itens={itens} key={index} peoples={peoples} />
            );
          })}
    </>
  );
}
