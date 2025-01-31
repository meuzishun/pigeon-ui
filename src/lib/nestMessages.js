export const nestMessages = (messages) => {
  const messageMap = new Map();
  const conversations = [];

  messages.forEach((msg) => messageMap.set(msg.id, { ...msg, replies: [] }));

  messages.forEach((msg) => {
    if (msg.parentId === null) {
      conversations.push([messageMap.get(msg.id)]);
    } else {
      const parent = messageMap.get(msg.parentId);

      if (parent) {
        const convo = conversations.find(
          (c) => c[c.length - 1].id === msg.parentId
        );

        if (convo) {
          convo.push(messageMap.get(msg.id));
        }
      }
    }
  });

  return conversations;
};
