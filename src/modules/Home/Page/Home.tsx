import React, { useEffect, useState } from 'react';
import { ItemList } from '../components/ItemList';
import { Modal } from '../components/Modal';
import { People } from '../domain/interfaces/IPeople';
import { GetAllPeoples } from '../Service/GetAllPeoples';
import '../Style.scss';

export function Home() {
  const [search, setSearch] = useState<string>('');
  const [people, setPeople] = useState<People[]>([
    { age: 18, city: '', email: '', fullname: 'Marco' },
  ]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setPeople(GetAllPeoples());
  }, []);

  function openModal(target: HTMLElement | null) {
    if (!target) setModal(!modal);

    const cNames = ['modal', 'modal__open'];

    const allow = cNames.find(i => i == target?.className);

    if (!allow) return null;

    setModal(!modal);
  }

  return (
    <div className="home">
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Search"
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
        <ItemList peoples={people} search={search} />
      </div>
      {modal && (
        <Modal openModal={openModal} setPeoples={setPeople} peoples={people} />
      )}
    </div>
  );
}
