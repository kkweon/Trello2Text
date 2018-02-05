import { ICard, getRecentCards } from "./modules/Card";
import { ILabel } from "./modules/Label";
import { IList, IListMap } from "./modules/List";
import { IMember, Member, IMemberMap } from "./modules/Member";
import { IAction } from "./modules/Action";

export interface ITrelloExport {
  name: string;
  desc: string;
  labels: ILabel[];
  dateLastActivity: Date;
  dateLastView: Date;

  cards: ICard[];
  lists: IList[];
  members: IMember[];
  actions: IAction[];
}

export function readJSON(): ITrelloExport {
  const content = document.body.textContent;
  const result = content && JSON.parse(content);

  return result;
}

function searchMemberIdByCardId(
  actions: IAction[],
  cardId: string,
): string | null {
  for (const action of actions) {
    if (action.data && action.data.card && action.data.card.id === cardId) {
      return action.idMemberCreator;
    }
  }
  return null;
}

if (typeof window !== "undefined") {
  if (document.readyState === "complete") {
    const data = readJSON();
    const listMap: IListMap = data.lists.reduce((acc: IListMap, val: IList) => {
      acc[val.id] = val;
      return acc;
    }, {});
    const memberMap: IMemberMap = Member.buildMemberMap(data.members);

    const ans =
      prompt(
        "최근 x 일 동안 생성/변경 된 카드 출력 (1: 최근 24시간 이내 변경/생성된 카드 출력, 2: 최근 2틀, ...) 기본값: 1",
        "1",
      ) || "1";
    const recentCards: ICard[] = getRecentCards(data.cards, parseInt(ans, 10));
    const actions = data.actions;

    recentCards.forEach(card => {
      if (card.idMembers.length > 0) {
        card.idMembers.forEach(memberId => {
          memberMap[memberId].addCard(listMap, card);
        });
      } else {
        // member is not assigned in the card
        // search through actions
        const memberId = searchMemberIdByCardId(actions, card.id);
        if (memberId) {
          memberMap[memberId].addCard(listMap, card);
        }
      }
    });

    Object.keys(memberMap).forEach(memberId => {
      const member = memberMap[memberId];
      const message = member.toString();
      console.log(message);
    });

    alert(`콘솔을 열어서 확인해주세요.
[윈도우/Linux] CTRL + SHIFT + J or F12
[OSX] ALT + CMD + J
`);
  }
}
