import { Factory } from "fishery";
import { fakerEN_US as faker } from "@faker-js/faker";
import { BankTransferType, type BankTransfer } from "../../../src/models/banktransfer";

const bankTransferFactory = Factory.define<BankTransfer>(({ sequence }) => ({
  id: `${sequence}`,
  uuid: faker.string.uuid(),
  userId: `user-${sequence}`,
  source: `bank-account-${sequence}`,
  amount: faker.number.int({ min: 100, max: 1000 }),
  type: faker.helpers.enumValue(BankTransferType),
  transactionId: `transaction-${sequence}`,
  createdAt: faker.date.past(),
  modifiedAt: faker.date.recent(),
}));

export default bankTransferFactory;
