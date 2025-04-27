import { Factory } from "fishery";
import { fakerEN_US as faker } from "@faker-js/faker";
import { Like } from "../../../src/models/like";

const likeFactory = Factory.define<Like>(({ sequence }) => ({
  id: `${sequence}`,
  uuid: faker.string.uuid(),
  userId: `user-${sequence}`,
  transactionId: `transaction-${sequence}`,
  createdAt: faker.date.past(),
  modifiedAt: faker.date.recent(),
}));

export default likeFactory;
