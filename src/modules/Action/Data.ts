export interface IUpdateCheckItemStateOnCard {
  checkItem: {
    state: string;
    name: string;
    id: string;
  };
  checklist: {
    name: string;
    id: string;
  };
  card: {
    shortLink: string;
    idShort: number;
    name: string;
    id: string;
  };
  board: {
    shortLink: string;
    name: string;
    id: string;
  };
}

export interface IAddMemberToCard {
  board: {
    shortLink: string;
    name: string;
    id: string;
  };
  card: {
    shortLink: string;
    idShort: number;
    name: string;
    id: string;
  };
  idMember: string;
}

export interface ICreateCard {
  board: {
    shortLink: string;
    name: string;
    id: string;
  };
  list: {
    name: string;
    id: string;
  };
  card: {
    shortLink: string;
    idShort: number;
    name: string;
    id: string;
  };
}

export interface IUpdateCardMoveList {
  listAfter: {
    name: string;
    id: string;
  };
  listBefore: {
    name: string;
    id: string;
  };
  board: {
    shortLink: string;
    name: string;
    id: string;
  };
  card: {
    shortLink: string;
    idShort: number;
    name: string;
    id: string;
    idList: string;
  };
  old: {
    idList: string;
  };
}

export interface IUpdateCardMovePos {
  list: {
    name: string;
    id: string;
  };
  board: {
    shortLink: string;
    name: string;
    id: string;
  };
  card: {
    shortLink: string;
    idShort: number;
    name: string;
    id: string;
    pos: number;
  };
  old: {
    pos: number;
  };
}

export interface IAddAttachmentToCard {
  board: {
    shortLink: string;
    name: string;
    id: string;
  };
  list: {
    name: string;
    id: string;
  };
  card: {
    shortLink: string;
    idShort: number;
    name: string;
    id: string;
  };
  attachment: {
    url: string;
    name: string;
    id: string;
    edgeColor: string;
    previewUrl: string;
    previewUrl2x: string;
  };
}
