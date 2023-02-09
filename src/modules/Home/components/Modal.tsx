import { useForm } from 'react-hook-form';
import { People } from '../domain/interfaces/IPeople';
import { yupResolver } from '@hookform/resolvers/yup';
import { savePeoples } from '../Service/SavePeoples';
import { schema } from '../validations/createSchema';
import { useContextApi } from '../hooks/useContextApi';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';

interface IModalProps {
  openModal: (e: HTMLElement | null) => void;
  item?: People;
}

export function Modal({ openModal, item }: IModalProps) {
  const { peoples, setPeoples, people } = useContextApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<People>({ resolver: yupResolver(schema) });

  function onSubmit(data: People) {
    const findEmail = peoples.find(i => i.email == data.email);
    const findName = peoples.find(i => i.fullname == data.fullname);

    if (!people) {
      if (
        (findName && findName !== people) ||
        (findEmail && findEmail !== people)
      ) {
        return toast('Nome ou email já cadastrado', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      const id = uuid();
      setPeoples([...peoples, { ...data, id }]);
      savePeoples([...peoples, { ...data, id }]);
      openModal(null);
      return null;
    }

    if (
      (findName && findName !== people) ||
      (findEmail && findEmail !== people)
    ) {
      return toast('Nome ou email já cadastrado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    const index = peoples.findIndex(i => i.id == people.id);

    peoples[index].age = data.age || peoples[index].age;
    peoples[index].city = data.city || peoples[index].city;
    peoples[index].email = data.email || peoples[index].email;
    peoples[index].fullname = data.fullname || peoples[index].fullname;

    console.log('testeee');

    setPeoples([...peoples]);
    savePeoples([...peoples]);
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
              <input
                id="input-name"
                {...register('fullname')}
                defaultValue={item && item.fullname}
              />
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
                defaultValue={item && item.age}
                {...register('age')}
              />
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="input-email">
              <p>Email :</p>
              <input
                id="input-email"
                {...register('email')}
                defaultValue={item && item.email}
              />
            </label>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="input-box">
            <label htmlFor="input-city">
              <p>City :</p>
              <input
                id="input-city"
                {...register('city')}
                defaultValue={item && item.city}
              />
            </label>
            {errors.city && <span>{errors.city.message}</span>}
          </div>
          <button type="submit">{item ? 'Update' : 'Create'}</button>
        </form>
      </div>
    </div>
  );
}
