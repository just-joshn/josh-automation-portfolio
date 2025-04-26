import { Factory } from "fishery";
import { DefaultPrivacyLevel, type User } from "../../../src/models/user";
import { fakerEN_US as faker } from "@faker-js/faker";

export const userFactory = Factory.define<User>(({ sequence }) => ({
  id: `${sequence}`,
  uuid: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  username: faker.internet.username(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  avatar: faker.image.avatar(),
  defaultPrivacyLevel: faker.helpers.enumValue(DefaultPrivacyLevel),
  balance: faker.number.int({ min: 10000, max: 200000 }),
  createdAt: faker.date.recent(),
  modifiedAt: faker.date.recent(),
}));
