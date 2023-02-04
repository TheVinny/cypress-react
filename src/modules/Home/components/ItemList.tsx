import { ItemListProps } from '../domain/interfaces/ItemListProps';

export function ItemList({ peoples, search }: ItemListProps) {
  function sortItens(index: number) {
    return index % 2 == 0 ? 'list__itens' : 'list__itens-sort';
  }

  return (
    <>
      {search.length
        ? peoples
            .filter(item => item.fullname.includes(search.trim()))
            .map((itens, index) => {
              return (
                <div className={sortItens(index)} key={index}>
                  {itens.fullname}
                </div>
              );
            })
        : peoples.map((itens, index) => {
            return (
              <div className={sortItens(index)} key={index}>
                {itens.fullname}
              </div>
            );
          })}
    </>
  );
}
