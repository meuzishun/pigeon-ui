import { getUniqueObjects } from './getUniqueObjects';

export const getParticipants = (conversation) => {
  const participants = conversation.map((msg) => msg.participants).flat();
  const uniqueParticipants = getUniqueObjects(participants, '_id');
  return uniqueParticipants;
};
