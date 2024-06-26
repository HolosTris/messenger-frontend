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
      from: secondUser,
      text:
        "Это длинное сообщение, призванное показать сообщения в несколько строк. " +
        Math.random(),
      date: Date.now() - (10 - i) * 10 * 60 * 1000,
      isRead: true,
    };
  } // for test purposes

  messages.push({
    id: messages.length,
    from: firstUser,
    text: "Hello, World",
    date: Date.now(),
    isRead: true,
  });

  messages.push({
    id: messages.length,
    from: firstUser,
    text: "Fuck you, World. I am exhausted already. I really am, just believe me. Fock.",
    date: Date.now(),
    isRead: true,
  });

  return messages;
}

export function generateUser(id: number): User {
  let user: User;

  if (id == 1)
    user = {
      id: 1,
      username: "Holos_Tris",
      name: "Трисей Александрин",
      bio: "I am that I am. And something else just to check.",
      birthdate: new Date("03.10.2000"),
      srcPic: "/holos.jpg",
    };
  //temporarly
  else if (id == 2)
    user = {
      id: 2,
      username: "mikunak",
      name: "Гуго Де Пейн",
      bio: "Матрица даёт о себе знать",
      birthdate: new Date("02.05.2002"),
      srcPic: "/image.png",
    };
  else if (id == 3)
    user = {
      id: 3,
      username: "v1lezz",
      name: "Вылезз",
      bio: "Лень чекать био Андрея",
      srcPic: "/v1lezz.jpg",
    };
  else
    user = {
      id: id,
      username: `Holos_${id}s`,
      name: `${id}s-kun`,
      bio: "I am that I am. And something else just to check.",
      srcPic: "/holos.jpg",
    };

  return user;
}

export function generateChats(num: number): Chat[] {
  const users = [generateUser(1), generateUser(2), generateUser(3)];

  const chats: Chat[] = [
    {
      id: 1,
      type: "dialogue",
      members: [users[0], users[1]],
      messages: generateMessages(users[0], users[1]),
      srcPic: users[1].srcPic,
      name: users[1].name,
    },
    {
      id: 2,
      type: "dialogue",
      members: [users[0], users[2]],
      messages: generateMessages(users[0], users[2]),
      srcPic: users[2].srcPic,
      name: users[2].name,
    },
  ];

  for (let i = 3; i <= num; i++) {
    users.push(generateUser(i + 1));
    chats.push({
      id: i,
      type: "dialogue",
      members: [users[0], users[i]],
      messages: generateMessages(users[0], users[i]),
      srcPic: users[i].srcPic,
      name: users[i].name,
    });
  }

  return chats;
}

export function getChatById(chats: Chat[], id: number): Chat {
  return chats.find((chat) => {
    if (id == chat.id) return chat;
  })!;
}
