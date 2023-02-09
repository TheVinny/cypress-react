import { useEffect, useState } from 'react';
import { ItemList } from '../components/ItemList';
import { Modal } from '../components/Modal';
import { useContextApi } from '../hooks/useContextApi';
import { GetAllPeoples } from '../Service/GetAllPeoples';
import '../Style.scss';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  const [search, setSearch] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const { setPeoples, people, setPeople } = useContextApi();

  function openModal(target: HTMLElement | null) {
    if (!target) {
      setModal(!modal);
      return null;
    }

    const cNames = ['modal', 'modal__open', 'viewItem'];

    const allow = cNames.find(i => i == target?.className);

    if (!allow) return null;

    setModal(!modal);
    setPeople(undefined);
  }

  useEffect(() => {
    setPeoples(GetAllPeoples());
  }, []);

  return (
    <div className="home">
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Search from email"
          onChange={({ target }) => setSearch(target.value)}
        />
        <button
          className="modal__open"
          type="button"
          onClick={({ target }) => openModal(target as HTMLElement)}
        >
          Criar
        </button>
      </div>
      <div className="list__container">
        <ItemList search={search} openModal={openModal} />
      </div>
      {modal && <Modal openModal={openModal} item={people} />}
    </div>
  );
}
