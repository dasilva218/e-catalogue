import { useRouter } from 'next/router';
import { Faker, faker } from '@faker-js/faker';
import DEALERS from '../../backend/model/dealers';
import connectMongo from '@/backend/database/dbConnect';
function teste({ USERS }) {
  //state
  // const USERS = [];
  // //events
  // function createRandomUser() {
  //   return {
  //     userId: faker.datatype.uuid(),
  //     username: faker.internet.userName(),
  //     email: faker.internet.email(),
  //     avatar: faker.image.avatar(),
  //     password: faker.internet.password(),
  //     birthdate: faker.date.birthdate(),
  //     registeredAt: faker.date.past(),
  //   };
  // }
  // Array.from({ length: 10 }).forEach(() => {
  //   USERS.push(createRandomUser());
  // });

  //render
  return <div>Enter</div>;
}

export default teste;

export const getServerSideProps = async (ctx) => {
  const USERS = [];
  function newDealer() {
    return {
      name: faker.company.name(),
      phone: faker.phone.number('0## ## ## ##'),
      email: faker.internet.email(),
      logo: faker.image.business(),
      city: faker.address.country(),
      district: faker.address.cityName(),
      time: { open: '08', close: '16' },
      sale: true,
      salecar: [
        {
          marque: faker.vehicle.vehicle(),
          model: faker.vehicle.model(),
          fuel: faker.vehicle.fuel(),
          transmission: 'manuel',
          type: faker.vehicle.type(),
          year: '2005',
          price: 20000,
          constructor: faker.vehicle.model(),
          img: 'toyota',
          door: 4,
        },
        {
          marque: faker.vehicle.vehicle(),
          model: faker.vehicle.model(),
          fuel: faker.vehicle.fuel(),
          transmission: 'manuel',
          type: faker.vehicle.type(),
          year: '2005',
          price: 20000,
          constructor: faker.vehicle.model(),
          img: 'toyota',
          door: 4,
        },
        {
          marque: faker.vehicle.vehicle(),
          model: faker.vehicle.model(),
          fuel: faker.vehicle.fuel(),
          transmission: 'manuel',
          type: faker.vehicle.type(),
          year: '2005',
          price: 20000,
          constructor: faker.vehicle.model(),
          img: 'toyota',
          door: 4,
        },
      ],
    };
  }
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  Array.from({ length: 10 }).forEach(() => {
    USERS.push(newDealer());
  });
  // const request = await DEALERS.insertMany(USERS);
  return {
    props: {
      USERS,
    },
  };
};
