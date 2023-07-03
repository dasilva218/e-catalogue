import CARDEALER from '../model/dealer/carsDealer';

// get : http://localhost:3000/api/carsale/[id]
export async function get_cars_sale_id(req, res) {
  try {
    const carsale = await CARDEALER.find({
      foreign_key_dealer: req.query.id,
      service: 'vente',
    });

    if (!carsale)
      return res.status(404).json({ error: 'Data not Found' });

    res.status(200).json(carsale);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

// get : http://localhost:3000/api/carrent/[id]
export async function get_car_rent_id(req, res) {
  try {
    const carRent = await CARDEALER.find({
      foreign_key_dealer: req.query.id,
      service: 'location',
    });

    if (!carRent)
      return res.status(404).json({ error: 'Data not Found' });

    res.status(200).json(carRent);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

export async function postCar(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res
        .status(404)
        .json({ error: 'Form Data Not Provided...!' });

    const data = await CARDEALER.create(formData);
    res.status(201).json(data);
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function deleteCar(req, res) {
  try {
    const { id } = req.query;

    if (id) {
      const car = await CARDEALER.findByIdAndDelete(id);
      return res.status(200).json(car);
    }

    res.status(404).json({ error: 'User Not Selected...!' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'Error While Deleting the User...!' });
  }
}
