import { useRouter } from 'next/router';
import { Faker, faker } from '@faker-js/faker';
import connectMongo from '@/backend/database/dbConnect';
// import DEALERS from '@/backend/model/dealer/dealer';
import CARDEALER from '@/backend/model/dealer/carsDealer';

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
  const CAR = {
    marque: 'm',
    model: faker.vehicle.model(),
    fuel: faker.vehicle.fuel(),
    transmission: 'automatique',
    service: 'vente',
    type: faker.vehicle.type(),
    year: '2015',
    price: faker.random.numeric(5),
    constructor: faker.vehicle.manufacturer(),
    img: [
      faker.image.image(),
      faker.image.image(),
      faker.image.image(),
    ],
    door: 4,
    foreign_key_dealer: '648eaeb65f86c6bdcceacfc3',
  };

  /* 
  const PARTICULAR = {
    name: faker.company.name(),
    phone: [faker.phone.number(), faker.phone.number()],
    email: faker.internet.email(),
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
  };
  */
  /*
  const concessionnaire = {
    name: faker.company.name(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    logo: faker.image.image(),
    city: 'libreville',
    district: 'rio',
    time: { open: '08', close: '15' },
    rent: false,
    sale: true,
  };
  */

  const USERS = [];
  function newDealer() {
    return CAR;
  }

  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  Array.from({ length: 4 }).forEach(() => {
    // USERS.push(newDealer());
  });

  // const request = await CARDEALER.insertMany(USERS);
  //
  return {
    props: {
      USERS,
    },
  };
};
