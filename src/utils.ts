import { Chat, Message, User } from "./types";

export function convertTimestampToTimeString(timestamp: number): string {
  const time = new Date(timestamp);
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const timeString = hours + ":" + minutes;

  return timeString;
}

export function generateMessages(firstUser: User, secondUser: User): Message[] {
  const messages: Message[] = [];

  for (let i = 0; i < 10; i++) {
    messages[i] = {
      id: i,
      from: firstUser,
      text: "Это длинное сообщение, призванное показать сообщения в несколько строк.",
      date: Date.now() - (10 - i) * 10 * 60 * 1000,
      isRead: true,
    };
  } // for test purposes

  messages.push({
    from: secondUser,
    text: "Hello, World",
    date: Date.now(),
    isRead: true,
  });

  messages.push({
    from: secondUser,
    text: "Fuck you, World. I am exhausted already. I really am, just believe me. Fock.",
    date: Date.now(),
    isRead: true,
  });

  return messages;
}

export function generateChat(): Chat {
  const users = [generateUser(0), generateUser(1)];

  const chat: Chat = {
    id: 1,
    type: "dialogue",
    members: users,
    messages: generateMessages(users[0], users[1]),
    srcPic: "/image.jpg",
    name: "Гуго Де Пейн",
  };

  return chat;
}

export function generateUser(id: number): User {
  let user: User;

  if (id == 0)
    user = {
      id: 0,
      username: "Holos_Tris",
      name: "Трисей Александрин",
      bio: "I am that I am. And something else just to check.",
      srcPic: "/image.png",
    };
  //temporarly
  else if (id == 1)
    user = {
      id: 1,
      username: "mikunak",
      name: "Гуго Де Пейн",
      bio: "Матрица даёт о себе знать",
      srcPic: "/image.png",
    };
  else
    user = {
      id: id,
      username: `Holos_${id}s`,
      name: `${id}s-kun`,
      bio: "I am that I am. And something else just to check.",
      srcPic: "/image.png",
    };

  return user;
}
