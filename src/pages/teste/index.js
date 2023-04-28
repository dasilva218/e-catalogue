import { useRouter } from 'next/router';
import { faker } from '@faker-js/faker';

function teste() {
  //state

  const USERS = [];
  //events
  function createRandomUser() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }
  Array.from({ length: 10 }).forEach(() => {
    USERS.push(createRandomUser());
  });
  console.log(USERS);

  //render
  return <div>Enter</div>;
}

export default teste;
