import { postDealer, postUser } from '@/libs/helpers';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function SignDealer() {
  // state
  const [logo, setLogo] = useState();
  // hook useForm()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //option du'axios
  const option = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  /**
   ** recup du champ file
   * @param {*} valeur du champ
   */
  const selectFiles = ({ target }) => {
    const files = target.files;
    if (files) setLogo(files[0]);
  };
  /**
   * * envoi du formulaire
   */
  const onSubmit = async (datas) => {
    const formData = new FormData();
    formData.append('file', logo);

    const { data } = await axios.post(
      '/api/upload',
      formData,
      option
    );
    const { newFilename } = data.files.file;

    const newDealer = {
      name: datas.name,
      phone: datas.phone,
      email: datas.email,
      logo: newFilename,
      city: datas.city,
      district: datas.district,
      time: { open: datas.open, close: datas.close },
      rent: datas.rent,
      sale: datas.sale,
    };
    const newUser = {
      email: datas.email,
      password: datas.password,
    };

    const dealerAdd = await postDealer(newDealer);

    const userAdd = await postUser(newUser);
  };

  // render
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
        <div className='grid '>
          <input
            type='file'
            name='logo'
            onChange={selectFiles}
            id=''
          />
          <input
            type='text'
            {...register('name')}
            id=''
            placeholder='name'
          />
          <input
            type='text'
            {...register('phone')}
            id=''
            placeholder='phone'
          />
          <input
            type='email'
            {...register('email')}
            id=''
            placeholder='email'
          />
          <select {...register('city')} id=''>
            <option value=''>Choisir la ville</option>
            <option value='libreville'>libreville</option>
            <option value='owendo'>Owendo</option>
            <option value='akanda'>Akanda</option>
          </select>
          <input
            type='text'
            {...register('district')}
            id=''
            placeholder='quartier'
          />
          <input type='time' {...register('open')} id='' />
          <input type='time' {...register('close')} id='' />
          <select {...register('rent')} id=''>
            <option value=''>faite vous dans la location</option>
            <option value='true'>Oui</option>
            <option value='false'>Non</option>
          </select>
          <select {...register('sale')} id=''>
            <option value=''>faite vous dans la vente</option>
            <option value='true'>Oui</option>
            <option value='false'>Non</option>
          </select>
          <input
            type='password'
            {...register('password')}
            id=''
            placeholder='password'
          />
        </div>
        <button className='btn' type='submit'>
          envoyer
        </button>
      </form>
    </div>
  );
}

export default SignDealer;
