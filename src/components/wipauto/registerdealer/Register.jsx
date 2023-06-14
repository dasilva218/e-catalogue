import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Form.module.css';
import Layout from '../signindealer/Layout';
import { boolean, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Select, TextField } from '@mui/material';
import clsx from 'clsx';
import { postDealer, postUser } from '@/libs/helpers';
import { useRouter } from 'next/router';

const schema = object({
  name: string().required('entrez un nom'),
  phone: string(),
  email: string(),
  city: string(),
  district: string(),
  rent: string(),
  sale: string(),
});

export default function Register() {
  // state
  // kook
  const route = useRouter();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  //   function
  const onSubmit = async (data) => {
    const newDealer = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      district: data.district,
      rent: data.rent,
      sale: data.sale,
      time: { open: data.timeopen, close: data.timeclose },
    };

    const newUser = {
      email: data.email,
      password: data.password,
    };

    try {
      const insertDealer = await postDealer(newDealer);
      const inserUser = await postUser(newUser);

      insertDealer.message && inserUser.message
        ? () => route.push('wipauto/admin/concessionnaire/connexion')
        : () =>
            route.push('wipauto/admin/concessionnaire/inscription');
    } catch (error) {
      console.log(error.message);
    }
  };
  // render
  return (
    <Layout composant={register}>
      <Head>
        <title>s'enregistrer</title>
      </Head>

      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-sm font-bold py-4'>
            enregistrer concessionnaire
          </h1>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-2'>
          <div className='flex flex-wrap gap-3'>
            <Controller
              name='name'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='nom'
                  id='name'
                  variant='standard'
                  placeholder='entrez votre nom'
                  autoComplete='off'
                  helperText={
                    errors?.name ? errors?.name?.message : ''
                  }
                  error={errors.name ? Boolean(true) : Boolean(false)}
                />
              )}
            />

            <Controller
              name='phone'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='tel'
                  id='phone'
                  variant='standard'
                  placeholder='entrez votre numéro'
                  autoComplete='off'
                  helperText={
                    errors?.phone ? errors?.phone?.message : ''
                  }
                  error={
                    errors.phone ? Boolean(true) : Boolean(false)
                  }
                />
              )}
            />

            <Controller
              name='email'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='email'
                  id='email'
                  variant='standard'
                  placeholder='entrez votre email'
                  autoComplete='off'
                  helperText={
                    errors?.email ? errors?.email?.message : ''
                  }
                  error={
                    errors.email ? Boolean(true) : Boolean(false)
                  }
                />
              )}
            />

            <Controller
              name='city'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='commune'
                  id='city'
                  variant='standard'
                  placeholder='entrez votre nom'
                  autoComplete='off'
                  helperText={
                    errors?.city ? errors?.city?.message : ''
                  }
                  error={errors.city ? Boolean(true) : Boolean(false)}
                />
              )}
            />

            <Controller
              name='district'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='quartier'
                  id='district'
                  variant='standard'
                  placeholder='entrez votre nom'
                  autoComplete='off'
                  helperText={
                    errors?.district ? errors?.district?.message : ''
                  }
                  error={
                    errors.district ? Boolean(true) : Boolean(false)
                  }
                />
              )}
            />
            <div className='flex flex-row gap-2'>
              <Controller
                name='timeopen'
                control={control}
                defaultValue={''}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='ouverture'
                    id='timeopen'
                    variant='standard'
                    placeholder=''
                    autoComplete='off'
                    helperText={
                      errors?.timeopen
                        ? errors?.timeopen?.message
                        : ''
                    }
                    error={
                      errors.timeopen ? Boolean(true) : Boolean(false)
                    }
                  />
                )}
              />

              <Controller
                name='timeclose'
                control={control}
                defaultValue={''}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='fermeture'
                    id='timeclose'
                    variant='standard'
                    placeholder='entrez votre nom'
                    autoComplete='off'
                    helperText={
                      errors?.timeclose
                        ? errors?.timeclose?.message
                        : ''
                    }
                    error={
                      errors.timeclose
                        ? Boolean(true)
                        : Boolean(false)
                    }
                  />
                )}
              />
            </div>
            <div className='flex gap-6'>
              <div className=''>
                <label htmlFor=''>location</label>
                <Controller
                  name='rent'
                  control={control}
                  defaultValue={''}
                  render={({ field }) => (
                    <select {...field}>
                      <option value='oui'>oui</option>
                      <option value='non'>non</option>
                    </select>
                  )}
                />
              </div>

              <div className=''>
                <label htmlFor=''>vente</label>
                <Controller
                  name='sale'
                  control={control}
                  defaultValue={''}
                  render={({ field }) => (
                    <select {...field}>
                      <option value='oui'>oui</option>
                      <option value='non'>non</option>
                    </select>
                  )}
                />
              </div>
            </div>
            <Controller
              name='password'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='password'
                  label='mot de passe'
                  id='password'
                  variant='standard'
                  placeholder='entrez le mot de passe'
                  autoComplete='off'
                  helperText={
                    errors?.password ? errors?.password?.message : ''
                  }
                  error={
                    errors.password ? Boolean(true) : Boolean(false)
                  }
                />
              )}
            />
            <Controller
              name='cfpassword'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='password'
                  label='confirmez mot de passe'
                  id='cfpassword'
                  variant='standard'
                  placeholder='confirmez mot de passe'
                  autoComplete='off'
                  helperText={
                    errors?.cfpassword
                      ? errors?.cfpassword?.message
                      : ''
                  }
                  error={
                    errors.cfpassword ? Boolean(true) : Boolean(false)
                  }
                />
              )}
            />
          </div>

          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-center text-gray-400 '>
          Have an account?{' '}
          <Link className='text-blue-700' href={'/login'}>
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  );
}
