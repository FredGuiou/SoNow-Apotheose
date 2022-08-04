export function findUser(users, searchedId) {
  const user = users.find((testedUser) => {
    return testedUser.id === searchedId;
  });
  return user;
};

export function isFollower(followed, searchedId) {
  const isFollower = followed.find((testedFollowed) => {
    return testedFollowed.id_followed=== searchedId;
  });
  return isFollower;
};
