import { useRouter } from 'next/router';
import { Faker, faker } from '@faker-js/faker';

import connectMongo from '@/backend/database/dbConnect';

// import RENTCARDEALER from '@/backend/model/dealer/rentcardealer';
import SALECARDEALER from '@/backend/model/dealer/salecardealer';
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
      marque: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      fuel: faker.vehicle.fuel(),
      transmission: 'automatique',
      type: faker.vehicle.type(),
      year: '2015',
      price: 20000,
      constructor: faker.vehicle.manufacturer(),
      img: '/img/voiture.png',
      door: 4,
      foreign_key_dealer: '647f6cfd8242e7e1bacb7bbd',
    };
  }
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  Array.from({ length: 6 }).forEach(() => {
    USERS.push(newDealer());
  });
  console.log(USERS);
  // const request = await SALECARDEALER.insertMany(USERS)
  return {
    props: {
      USERS,
    },
  };
};
