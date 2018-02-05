import { expect } from "chai";
import "mocha";
import * as List from "../../src/modules/List";
import { doneListId, fakeListMap } from "../helper";

describe("List type checking", () => {
  it("should return true when doneListId is given", () => {
    const result = List.isDoneList(fakeListMap, doneListId);
    expect(result).to.equal(true);
  });

  it("should return false when wrong id is given", () => {
    expect(List.isDoneList(fakeListMap, "myid")).to.equal(false);
  });
});
