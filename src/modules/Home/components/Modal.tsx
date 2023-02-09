import { useForm } from 'react-hook-form';
import { People } from '../domain/interfaces/IPeople';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { savePeoples } from '../Service/SavePeoples';
import { schema } from '../validations/createSchema';

interface IModalProps {
  openModal: (e: HTMLElement | null) => void;
  setPeoples: (people: People[]) => void;
  peoples: People[];
}

export function Modal({ openModal, setPeoples, peoples }: IModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<People>({ resolver: yupResolver(schema) });

  function onSubmit(data: People) {
    setPeoples([...peoples, data]);

    savePeoples([...peoples, data]);

    openModal(null);
  }

  return (
    <div
      className="modal"
      onClick={({ target }) => openModal(target as HTMLElement)}
    >
      <div className="modal__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label htmlFor="input-name">
              <p>Name :</p>
              <input id="input-name" {...register('fullname')} />
            </label>
            {errors.fullname && <span>{errors.fullname.message}</span>}
          </div>
          <div className="input-box">
            <label htmlFor="input-age">
              <p>Age :</p>
              <input
                id="input-age"
                type="number"
                min={1}
                defaultValue={0}
                {...register('age')}
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="input-email">
              <p>Email :</p>
              <input id="input-email" {...register('email')} />
            </label>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="input-box">
            <label htmlFor="input-city">
              <p>City :</p>
              <input id="input-city" {...register('city')} />
            </label>
            {errors.city && <span>{errors.city.message}</span>}
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
