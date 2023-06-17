import connectMongo from '@/backend/database/dbConnect';
import DEALERS from '@/backend/model/dealer/dealer';
import Layout from '@/components/wipauto/admin/Layout';
import { getSession } from 'next-auth/react';

export default function Dashboard({ DEALER }) {
  console.log(DEALER);
  return (
    <Layout>
      <div>
        <h1>welcomme to the dashboard</h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  // connexion a mongodb
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );
  // gestion du cache
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  // gestion de la session de l'utilisateur
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/wipauto/admin/concessionnaire/connexion',
        permanent: false,
      },
    };
  }

  const DEALER = await DEALERS.findOne({ email: session.user.email });

  return {
    props: { DEALER: JSON.parse(JSON.stringify(DEALER)) },
  };
}
