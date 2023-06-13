import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Form.module.css';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from './Layout';

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    if (status.ok) router.push(status.url);
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  }

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
        <form className='flex flex-col gap-5'>
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
