import { get_cars_sale_id } from '@/backend/controller/CarsDealer';
import connectMongo from '@/backend/database/dbConnect';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  switch (req.method) {
    case 'GET':
      get_cars_sale_id(req, res);
      break;
    case 'PUT':
      editTeste(req, res);
      break;
    case 'PATCH':
      addTeste(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowd`);
      break;
  }
}
