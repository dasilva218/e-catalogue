import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Form.module.css';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from './Layout';
import { useForm } from 'react-hook-form';

export default function Login() {
  //  state

  // hook
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // function
  const onSubmit = async () => {
    const status = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/wipauto/admin/concessionnaire/connexion',
    });

    console.log(status);
    router.push(status.url);
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className='w-3/4  mx-auto flex flex-col gap-10'>
        <h1 className='text-gray-800 text-4xl font-bold py-4'>
          Explore
        </h1>

        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-5'>
          <div></div>

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
