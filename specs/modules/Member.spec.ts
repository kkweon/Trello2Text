import { expect } from "chai";
import "mocha";
import { Member } from "../../src/modules/Member";
import { ICard } from "../../src/modules/Card";
import {
  generateRandomCard,
  fakeListMap,
  todoListId,
  doneListId,
} from "../helper";

const card1: ICard = generateRandomCard(0);
card1.idList = todoListId;

const card2: ICard = generateRandomCard(1);
card2.idList = doneListId;

const cards: ICard[] = [card1, card2];

const me = new Member("kkweon", "Mo Kweon");
cards.forEach(card => me.addCard(fakeListMap, card));

describe("Card class", () => {
  it("should have 1 done card", () => {
    expect(me.done).to.have.lengthOf(1);
  });
  it("should have 1 todo card", () => {
    expect(me.todo).to.have.lengthOf(1);
  });

  it("should correctly generate a message", () => {
    const message = `
[Mo Kweon(kkweon)]

*완료*
${card2.name}

*오늘 할 일*
${card1.name}
`;
    expect(me.toString()).to.equal(message);
  });
});
