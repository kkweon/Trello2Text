import { getDateFromToday } from "../utils";
import {
  IListMap,
  isDoneList,
  isIdeaList,
  isPauseList,
  isTodoList,
} from "./List";

interface ILabel {
  id: string;
  idBoard: string;
  name: string;
  color: string;
  uses: number;
}

export interface ICard {
  id: string;
  dateLastActivity: string;
  desc: string;

  idShort: string;
  idBoard: string;
  idList: string;
  idLabels: string[];
  name: string;
  shortLink: string;

  idMembers: string[];
  labels?: ILabel[];
}

export function getRecentCards(cards: ICard[], n: number) {
  return cards.filter(
    (card: ICard) => getDateFromToday(-n) <= new Date(card.dateLastActivity),
  );
}

export class Card {
  public static getRecentCards(cards: ICard[], n: number): ICard[] {
    return cards.filter(
      (card: ICard) => getDateFromToday(-n) <= new Date(card.dateLastActivity),
    );
  }

  public static isIdeaCard(listMap: IListMap, card: ICard): boolean {
    return isIdeaList(listMap, card.idList);
  }

  public static isTodoCard(listMap: IListMap, card: ICard): boolean {
    return isTodoList(listMap, card.idList);
  }

  public static isDoneCard(listMap: IListMap, card: ICard): boolean {
    return isDoneList(listMap, card.idList);
  }

  public static isPauseCard(listMap: IListMap, card: ICard): boolean {
    return isPauseList(listMap, card.idList);
  }

  public static renderCard(card: ICard): string {
    return `${card.name}`;
  }
  public static renderCards(cards: ICard[]): string {
    return cards.map(this.renderCard).join("\n");
  }
}
