import Head from 'next/head';
import styles from '../../../styles/Form.module.css';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from './Layout';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import Link from 'next/link';

const schema = object({
  email: string().required(),
  password: string().required(),
});

export default function Login() {
  //  state
  // hook
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  // function

  /**
   * ! fonction en charge de la soumition
   */
  const onSubmit = async ({ email, password }) => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: '/wipauto/admin/concessionnaire/dashboard',
    });

    // setMessage(result.error);
    if (result.ok) router.push(result.url);
  };

  return (
    <Layout>
      <Head>
        <title>connexion concessionnaire</title>
      </Head>

      <section className='w-3/4  mx-auto flex flex-col gap-10'>
        <h1 className='text-gray-800 text-2xl font-bold py-4'>
          Connexion Concessionnaire
        </h1>
        <Link href={'/wipauto/accueil'} className=''>
          Accueil auto
        </Link>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-5'>
          <div className='grid grid-rows-2'>
            <Controller
              name='email'
              control={control}
              defaultValue={''}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='email'
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
          </div>

          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
