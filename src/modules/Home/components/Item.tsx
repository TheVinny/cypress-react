import { IItem } from '../domain/interfaces/IItem';
import { AiOutlineDelete, AiOutlineUnorderedList } from 'react-icons/ai';
import { useContextApi } from '../hooks/useContextApi';
import { savePeoples } from '../Service/SavePeoples';

export function Item({ index, item, openModal }: IItem) {
  const { peoples, setPeoples, setPeople } = useContextApi();

  function DeletePeople() {
    peoples.splice(index, 1);

    setPeoples([...peoples]);

    savePeoples([...peoples]);
  }

  function OpenModalUpdate(target: HTMLElement | null) {
    openModal(target);

    setPeople(item);

    savePeoples([...peoples]);
  }

  return (
    <div className="list__itens" key={index}>
      <div className="infos">
        <p>{item.fullname}</p>
        <span>{item.email}</span>
      </div>
      <div className="container__buttons-item">
        <button type="button" onClick={() => DeletePeople()}>
          <AiOutlineDelete />
        </button>
        <button
          type="button"
          className="viewItem"
          onClick={({ target }) => OpenModalUpdate(target as HTMLElement)}
        >
          <AiOutlineUnorderedList />
        </button>
      </div>
    </div>
  );
}
