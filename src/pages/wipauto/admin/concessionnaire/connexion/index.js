import Login from '@/components/wipauto/signindealer/Login';
import { getSession } from 'next-auth/react';

export default function SignInDealer() {
  return (
    <>
      <Login />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession();
  console.log(session);
  return {
    props: {},
  };
}
