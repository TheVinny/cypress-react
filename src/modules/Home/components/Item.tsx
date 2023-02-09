import { IItem } from '../domain/interfaces/IItem';
import { AiOutlineDelete, AiOutlineUnorderedList } from 'react-icons/ai';
import { DeletePeople } from '../Service/DeletePeople';

export function Item({ index, itens, peoples }: IItem) {
  function sortItens(index: number) {
    return index % 2 == 0 ? 'list__itens' : 'list__itens-sort';
  }

  return (
    <div className={sortItens(index)} key={index}>
      <p>{itens.fullname}</p>
      <div className="container__buttons-item">
        <button type="button" onClick={() => console.log('teste')}>
          <AiOutlineDelete />
        </button>
        <button type="button">
          <AiOutlineUnorderedList />
        </button>
      </div>
    </div>
  );
}
