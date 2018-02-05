import { expect } from "chai";
import "mocha";
import * as Card from "../../src/modules/Card";
import { generateRandomCard } from "../helper";

describe("when there are 3 cards (1 relevant)", () => {
  const cards: Card.ICard[] = [
    generateRandomCard(0),
    generateRandomCard(-10),
    generateRandomCard(-10),
  ];

  it("should return 3 cards", () => {
    const result = Card.getRecentCards(cards, 1);
    expect(result)
      .include(cards[0])
      .not.include(cards[1])
      .not.include(cards[2]);
  });
});
