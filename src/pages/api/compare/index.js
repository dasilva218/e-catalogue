import connectMongo from '@/backend/database/dbConnect';
import DEALERS from '@/backend/model/testedealers';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  switch (req.method) {
    case 'GET':
      console.log(req.query);
      try {
        const testes = await DEALERS.find({
          'salecar.marque': req.query.marque,
          'salecar.model': req.query.model,
        }).select('salecar');

        if (!testes) {
          res
            .status(200)
            .json({ message: 'Vous avez aucune données' });
        }
        res.status(200).json(testes);
      } catch (error) {
        res.status(404).json({
          error: 'erreur dans la récupération des données',
        });
      }
      break;
    case 'POST':
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowd`);
      break;
  }
}
