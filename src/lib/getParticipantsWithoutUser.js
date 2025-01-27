import { getParticipants } from './getParticipants';

export const getParticipantsWithoutUser = (conversation, user) => {
  const participants = getParticipants(conversation);
  return participants.filter((participant) => participant._id !== user._id);
};
