export const nestMessages = (messages) => {
  const msgDict = {};
  const conversations = [];

  if (messages) {
    messages.forEach((msg) => (msgDict[msg._id] = msg));

    messages.forEach((msg) => {
      if (msg.parentId === null) {
        conversations.push([msg]);
      } else {
        const parent = msgDict[msg.parentId];

        if (parent) {
          const convo = conversations.find(
            (c) => c[c.length - 1]._id === msg.parentId
          );

          if (convo) {
            convo.push(msg);
          }
        }
      }
    });
  }

  return conversations;
};
