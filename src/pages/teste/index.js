import { useRouter } from 'next/router';
import { Faker, faker } from '@faker-js/faker';
import connectMongo from '@/backend/database/dbConnect';
// import SALECARP from '@/backend/model/particular/salecarparticular';
import RENTCARP from '@/backend/model/particular/rentcarparticular';
// import PARTICULARS from '@/backend/model/particular/particular';
// import RENTCARDEALER from '@/backend/model/dealer/rentcardealer';
// import SALECARDEALER from '@/backend/model/dealer/salecardealer';

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
    marque: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    fuel: faker.vehicle.fuel(),
    transmission: 'automatique',
    type: faker.vehicle.type(),
    year: '2015',
    city: 'akanda',
    price: 20000,
    constructor: faker.vehicle.manufacturer(),
    img: '/img/voiture.png',
    door: 4,
    foreign_key_dealer: '6480b41078805842c39bf563',
  };
  const PARTICULAR = {
    name: faker.company.name(),
    phone: [faker.phone.number(), faker.phone.number()],
    email: faker.internet.email(),
    logo: 'https://loremflickr.com/640/480/business',
    city: 'libreville',
  };
  // const USERS = [];
  function newDealer() {
    return CAR;
  }
  connectMongo().catch(() =>
    res.status(405).json({ error: 'erreure dans la connexion' })
  );

  Array.from({ length: 2 }).forEach(() => {
    USERS.push(newDealer());
  });
  console.log(USERS);
  const request = await RENTCARP.insertMany(USERS);
  return {
    props: {
      USERS,
    },
  };
};
