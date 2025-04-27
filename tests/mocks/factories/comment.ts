import { Factory } from "fishery";
import { fakerEN_US as faker } from "@faker-js/faker";
import { Comment } from "../../../src/models/comment";

const commentFactory = Factory.define<Comment>(({ sequence }) => ({
  id: `${sequence}`,
  uuid: faker.string.uuid(),
  content: faker.lorem.words(),
  userId: `user-${sequence}`,
  transactionId: `transaction-${sequence}`,
  createdAt: faker.date.past(),
  modifiedAt: faker.date.recent(),
}));

export default commentFactory;
