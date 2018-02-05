export interface IList {
  id: string;
  name: string;
  closed: boolean;
  idBoard: string;
}

export enum EnumList {
  idea = "아이디어",
  todo = "오늘 할 일",
  done = "완료",
  pause = "일시정지",
}

export interface IListMap {
  [key: string]: IList;
}

export function isIdeaList(listMap: IListMap, listId: string): boolean {
  if (!(listId in listMap)) return false;
  return listMap[listId].name === EnumList.idea;
}
export function isTodoList(listMap: IListMap, listId: string): boolean {
  if (!(listId in listMap)) return false;
  return listMap[listId].name === EnumList.todo;
}
export function isDoneList(listMap: IListMap, listId: string): boolean {
  if (!(listId in listMap)) return false;
  return listMap[listId].name === EnumList.done;
}
export function isPauseList(listMap: IListMap, listId: string): boolean {
  if (!(listId in listMap)) return false;
  return listMap[listId].name === EnumList.pause;
}
