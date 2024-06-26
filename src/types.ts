export interface User {
  id: number;
  username: string;
  name: string;
  bio?: string;
  birthdate?: Date;
  srcPic: string;
}

export interface Message {
  id?: number;
  from: User;
  text: string;
  date: number;
  isRead: boolean;
}

export interface Chat {
  id: number;
  type: string;
  members: User[];
  messages: Message[];
  name: string;
  srcPic: string;
}

export interface Auth {
  date: number;
  user?: User;
}

export interface AppState {
  curChatId: number;
  profileUser?: User;
}
