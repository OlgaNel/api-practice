import { faker } from '@faker-js/faker';

export const generateRandomRecord = () => {
  return {
    fields: {
      "Name": faker.commerce.productName(),
      "Device Type": faker.helpers.arrayElement(['iOS', 'Android', 'Laptop']), 
      "Serial Number": {
        text: faker.string.alphanumeric({ length: 12, casing: 'upper' }) 
      },
      "Photo": [
        {
          url: faker.image.urlPicsumPhotos({ width: 800, height: 600 }) 
        }
      ],
      "Notes": faker.lorem.sentence()
    }
  };
};
