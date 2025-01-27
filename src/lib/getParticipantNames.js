import { getUniqueObjects } from './getUniqueObjects';

export const getParticipantNames = (conversation, user) => {
  const sortedAuthors = [...conversation]
    .sort((a, b) => {
      const timeA = new Date(a.timestamp);
      const timeB = new Date(b.timestamp);
      return timeB - timeA;
    })
    .map((msg) => msg.author);

  const participants = conversation
    .map((message) => message.participants)
    .flat(Infinity);

  const uniqueParticipants = getUniqueObjects(
    [...sortedAuthors, ...participants],
    '_id'
  );

  const participantsNames = uniqueParticipants
    .filter((participant) => participant._id !== user._id)
    .map((participant) => participant.firstName);

  return participantsNames;
};
