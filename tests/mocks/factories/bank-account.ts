import { Factory } from "fishery";
import { fakerEN_US as faker } from "@faker-js/faker";
import { type BankAccount } from "../../../src/models/bankaccount";

const bankAccountFactory = Factory.define<BankAccount>(({ sequence }) => {
  const bankAccountNumberRange = faker.number.int({ min: 8, max: 12 });

  return {
    id: `${sequence}`,
    uuid: faker.string.uuid(),
    userId: `user-${sequence}`,
    bankName: faker.company.name(),
    accountNumber: faker.finance.accountNumber(bankAccountNumberRange),
    routingNumber: faker.finance.routingNumber(),
    isDeleted: false,
    createdAt: faker.date.past(),
    modifiedAt: faker.date.recent(),
  };
});

export default bankAccountFactory;
