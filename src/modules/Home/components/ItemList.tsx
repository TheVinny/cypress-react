import { IItemListProps } from '../domain/interfaces/ItemListProps';
import { useContextApi } from '../hooks/useContextApi';
import { Item } from './Item';

export function ItemList({ search, openModal }: IItemListProps) {
  const { peoples } = useContextApi();

  return (
    <>
      {search.length
        ? peoples
            .filter(item => item.fullname.includes(search.trim()))
            .map((itens, index) => {
              return (
                <Item
                  index={index}
                  item={itens}
                  key={index}
                  openModal={openModal}
                />
              );
            })
        : peoples.map((itens, index) => {
            return (
              <Item
                index={index}
                item={itens}
                key={index}
                openModal={openModal}
              />
            );
          })}
    </>
  );
}
