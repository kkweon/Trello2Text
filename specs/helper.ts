import * as Card from "../src/modules/Card";
import * as List from "../src/modules/List";

export function getDateFromToday(numberOfDaysToAdd: number) {
  const someDate = new Date();
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  return someDate.toISOString();
}

export function generateRandomCard(numberOfDays: number): Card.ICard {
  return {
    dateLastActivity: getDateFromToday(numberOfDays),
    desc: makeid(),
    id: makeid(),
    idBoard: makeid(),
    idLabels: [makeid()],
    idList: makeid(),
    idMembers: [makeid()],
    idShort: makeid(),
    name: makeid(),
    shortLink: makeid(),
  };
}

export function makeid(): string {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export const todoListId = makeid();
export const ideaListId = makeid();
export const doneListId = makeid();
export const pauseListId = makeid();

export const fakeListMap: List.IListMap = {
  [todoListId]: {
    closed: false,
    id: todoListId,
    idBoard: makeid(),
    name: List.EnumList.todo,
  },

  [ideaListId]: {
    closed: false,
    id: ideaListId,
    idBoard: makeid(),
    name: List.EnumList.idea,
  },

  [doneListId]: {
    closed: false,
    id: doneListId,
    idBoard: makeid(),
    name: List.EnumList.done,
  },

  [pauseListId]: {
    closed: false,
    id: pauseListId,
    idBoard: makeid(),
    name: List.EnumList.pause,
  },
};
