export const filterUserAndFriends = (users, friends, user) => {
  return users?.filter(
    ({ _id }) =>
      !friends.map((friend) => friend._id).includes(_id) && user._id !== _id
  );
};
