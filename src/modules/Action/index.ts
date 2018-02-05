import * as DataType from "./Data";
import { ActionType } from "./Type";

export interface IMemberCreator {
  id: string;
  fullName: string;
  initials: string;
  username: string;
}

export interface IAction {
  id: string;
  idMemberCreator: string;
  date: Date;
  memberCreator: IMemberCreator;
  data: DataType.ICreateCard | DataType.IUpdateCardMoveList;
  type: ActionType;
}
