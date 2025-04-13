import { Factory } from "fishery";
import { DefaultPrivacyLevel, type User } from "../../src/models/user";
import { fakerEN_US as faker } from "@faker-js/faker";

export const userFactory = Factory.define<User>(() => {
  const id = faker.string.alphanumeric(10);
  const uuid = faker.string.uuid();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.number();
  const avatar = faker.image.avatar();
  const defaultPrivacyLevel = faker.helpers.enumValue(DefaultPrivacyLevel);
  const balance = faker.number.int({ min: 10000, max: 200000 });
  const createdAt = faker.date.recent();
  const modifiedAt = faker.date.recent();

  return {
    id,
    uuid,
    firstName,
    lastName,
    username,
    password,
    email,
    phoneNumber,
    avatar,
    defaultPrivacyLevel,
    balance,
    createdAt,
    modifiedAt,
  };
});
