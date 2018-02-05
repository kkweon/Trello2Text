import { ICard, Card } from "./Card";
import { IListMap } from "./List";

export interface IMember {
  id: string;
  bio: string;
  fullName: string;
  initials: string;
  status: string;
  url: string;
  username: string;
}

export interface IMemberMap {
  [key: string]: Member;
}

export class Member {
  public static buildMemberMap(members: IMember[]): IMemberMap {
    const memberMap: IMemberMap = {};
    members.forEach((member) => {
      const mClass = new Member(member.username, member.fullName);
      memberMap[member.id] = mClass;
    });

    return memberMap;
  }

  public idea: ICard[];
  public todo: ICard[];
  public done: ICard[];
  public pause: ICard[];

  constructor(private username: string, private fullName: string) {
    this.idea = [];
    this.todo = [];
    this.done = [];
    this.pause = [];
  }

  public addCard(listMap: IListMap, card: ICard) {
    if (Card.isIdeaCard(listMap, card)) this.idea.push(card);
    else if (Card.isTodoCard(listMap, card)) this.todo.push(card);
    else if (Card.isDoneCard(listMap, card)) this.done.push(card);
    else if (Card.isPauseCard(listMap, card)) this.pause.push(card);
  }

  public toString() {
    let message: string = `
[${this.fullName}(${this.username})]
`;

    if (this.idea.length > 0) {
      message += `
*아이디어*
${Card.renderCards(this.idea)}
`;
    }

    if (this.todo.length > 0) {
      message += `
*오늘 할 일*
${Card.renderCards(this.todo)}
`;
    }

    if (this.done.length > 0) {
      message += `
*완료*
${Card.renderCards(this.done)}
`;
    }

    if (this.pause.length > 0) {
      message += `
*일시정지*
${Card.renderCards(this.pause)}
`;
    }

    return message;
  }
}
