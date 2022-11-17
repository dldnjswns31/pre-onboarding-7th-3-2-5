import { faker } from '@faker-js/faker';
// faker.setLocale('ko');

const fakers = () => {
  return {
    uuid: faker.datatype.uuid(),
    name: faker.name.fullName(),
    userId: Math.floor(Math.random() * (100 - 1)) + 1,
    created: faker.date.between('2019-04-01', '2022-08-01'),
    updated: faker.date.between('2019-04-01', '2022-08-01'),
  };
};

export default fakers;
